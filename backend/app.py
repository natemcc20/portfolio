from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import resend

load_dotenv()

app = Flask(__name__)

CORS(app)


TO = os.getenv('TO')

# Switched to Resend API since Render's free tier blocks outbound SMTP connections
resend.api_key = os.getenv('RESEND_API_KEY')


# AI generated api/ping. Using free tier on Render, to spin up my backend.
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
        resend.Emails.send({
            "from": "onboarding@resend.dev",
            "to": TO,
            "subject": f"Portfolio contact from {name}",
            "text": f"From: {name} <{email}>\n\n{message}"
        })

        return jsonify({'success': True})

    except Exception as e:
        print(e)
        return jsonify({'success': False})


if __name__ == '__main__':
    app.run(debug=True)