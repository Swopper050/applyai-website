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
