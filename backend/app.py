from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import smtplib
import os
from email.mime.text import MIMEText

load_dotenv()

app = Flask(__name__)

CORS(app)



EMAIL = os.getenv('EMAIL')
PASSWORD = os.getenv('PASSWORD')
TO = os.getenv('TO')


#AI generated api/ping. Using free tier on Render, to spin up my backend.
#Render does NOT support SMTP so the contact forum will not work. Looking at hosting my own server.

@app.route('/api/ping')
def ping():
    return {'status': 'ok'}

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    try:
        msg = MIMEText(f"From: {name} <{email}>\n\n{message}")
        msg['Subject'] = f"Portfolio contact from {name}"
        msg['From'] = EMAIL
        msg['To'] = TO

        with smtplib.SMTP('smtp.mail.me.com', 587) as server: #backend host is not supporting SMTP
            server.starttls()
            server.login(EMAIL, PASSWORD)
            server.sendmail(EMAIL, TO, msg.as_string())

        return jsonify({'success': True})
    except Exception as e:
        print(e)
        return jsonify({'success': False})
    

if __name__ == '__main__':
    app.run(debug=True)