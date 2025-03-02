from datetime import datetime
from string import Template

from flask_mail import Message

from app.extensions import mail


def _attach_email_images(message):
    """Attach logo and signature images to the email message as inline images."""
    with open("./email_templates/ApplyAI logo.png", "rb") as logo_file:
        message.attach(
            "ApplyAI logo.png",
            "image/png",
            logo_file.read(),
            "inline",
            headers={"Content-ID": "<logo>"},
        )

    with open("./email_templates/logo_signature.png", "rb") as signature_file:
        message.attach(
            "logo_signature.png",
            "image/png",
            signature_file.read(),
            "inline",
            headers={"Content-ID": "<signature>"},
        )


def send_contact_confirmation_email(
    *, name: str, email: str, phone: str = "", message: str
):
    """Send a confirmation email to the person who submitted the contact form."""
    with open("./email_templates/contact_confirmation.html", "r") as file:
        html_content = file.read()

    html_content = Template(html_content).safe_substitute(
        name=name, phone=phone, message=message
    )

    email_message = Message(
        subject="ApplyAI - Bedankt voor je bericht",
        recipients=[email],
        html=html_content,
    )

    _attach_email_images(email_message)

    mail.send(email_message)


def send_contact_notification_email(
    *, name: str, email: str, phone: str = "", message: str
):
    """Send a notification email to the business about a new contact form submission."""
    current_date = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    with open("./email_templates/contact_notification.html", "r") as file:
        html_content = file.read()

    html_content = Template(html_content).safe_substitute(
        name=name, email=email, phone=phone, message=message, date=current_date
    )

    email_message = Message(
        subject="ApplyAI - Nieuwe inzending contactformulier",
        recipients=["info@applyai.nl"],
        html=html_content,
        reply_to=email,
    )

    _attach_email_images(email_message)

    mail.send(email_message)


def send_verification_email(*, email: str, verification_link: str):
    """Send an email verification link to the user."""
    with open("./email_templates/verify_email.html", "r") as file:
        html_content = file.read()

    html_content = Template(html_content).safe_substitute(
        verification_link=verification_link
    )

    email_message = Message(
        subject="ApplyAI - Verifieer je e-mailadres",
        recipients=[email],
        html=html_content,
    )

    _attach_email_images(email_message)

    mail.send(email_message)
