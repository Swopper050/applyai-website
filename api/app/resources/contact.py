from flask import request
from flask_restx import Resource

from app.extensions import api
from app.mail_utils import (
    send_contact_confirmation_email,
    send_contact_notification_email,
)


@api.route("/contact")
class Contact(Resource):
    def post(self):
        data = request.json

        if not data:
            return {"error": "No data provided"}, 400

        name = data.get("name")
        email = data.get("email")
        phone = data.get("phone", "")  # Optional
        message = data.get("message")

        if not name:
            return {"error": "Name is required"}, 400
        if not email:
            return {"error": "Email is required"}, 400
        if not message:
            return {"error": "Message is required"}, 400

        try:
            send_contact_confirmation_email(
                name=name, email=email, phone=phone, message=message
            )
            send_contact_notification_email(
                name=name, email=email, phone=phone, message=message
            )

            return {"result": "Your message has been sent successfully"}, 200

        except Exception as e:
            return {"error": f"Failed to send message: {str(e)}"}, 500
