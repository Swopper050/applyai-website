from datetime import datetime
from string import Template

from flask_mail import Message

from app.config import (
    APPLYAI_FRONTEND_URL,
)
from app.extensions import mail


def send_email_verification_email(*, receiver: str, verification_token: str):
    verification_link = (
        f"{APPLYAI_FRONTEND_URL}/verify-email?"
        f"email={receiver}&verification_token={verification_token}"
    )

    with open("./email_templates/verify_email.html", "r") as file:
        html_content = file.read()

    html_content = Template(html_content).safe_substitute(
        verification_link=verification_link
    )

    message = Message(
        subject="🛁 ApplyAI - Email verification",
        recipients=[receiver],
        html=html_content,
    )
    message.html
    mail.send(message)


def send_contact_confirmation_email(*, name: str, email: str, message: str):
    """Send a confirmation email to the person who submitted the contact form."""
    with open("./email_templates/contact_confirmation.html", "r") as file:
        html_content = file.read()

    html_content = Template(html_content).safe_substitute(
        name=name,
        message=message
    )

    email_message = Message(
        subject="🛁 ApplyAI - Thank you for your message",
        recipients=[email],
        html=html_content,
    )
    mail.send(email_message)


def send_contact_notification_email(*, name: str, email: str, message: str):
    """Send a notification email to the business about a new contact form submission."""
    current_date = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    with open("./email_templates/contact_notification.html", "r") as file:
        html_content = file.read()

    html_content = Template(html_content).safe_substitute(
        name=name,
        email=email,
        message=message,
        date=current_date
    )

    email_message = Message(
        subject="🛁 ApplyAI - New Contact Form Submission",
        recipients=["info@applyai.nl"],
        html=html_content,
        reply_to=email
    )
    mail.send(email_message)
