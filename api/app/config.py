import os

APPLYAI_DB_NAME = os.environ.get("APPLYAI_DB_NAME", "applyai_db")
APPLYAI_DB_USER = os.environ.get("APPLYAI_DB_USER", "applyai_user")
APPLYAI_DB_PASSWORD = os.environ.get("APPLYAI_DB_PASSWORD", "applyai_password")
APPLYAI_DB_HOST = os.environ.get("APPLYAI_DB_HOST", "127.0.0.1")
APPLYAI_DB_PORT = os.environ.get("APPLYAI_DB_PORT", "3306")


APPLYAI_FERNET_SECRET_KEY = os.environ.get(
    "APPLYAI_FERNET_SECRET_KEY", "kxmkv6vw7AMDx92BH9JSEZ7_PQqPyYsWZBAGzP0kXys="
)
""" Key used for encrypting. The default key is used for development purposes only. """


class BaseConfig:
    SECRET_KEY = os.environ.get("APPLYAI_SECRET_KEY", "secret_oohhhhhh")
    SQLALCHEMY_DATABASE_URI = (
        f"mysql://{APPLYAI_DB_USER}:{APPLYAI_DB_PASSWORD}@"
        f"{APPLYAI_DB_HOST}:{APPLYAI_DB_PORT}/"
        f"{APPLYAI_DB_NAME}"
    )

    MAIL_SERVER = os.environ.get("APPLYAI_MAIL_SERVER", "localhost")
    MAIL_PORT = int(os.environ.get("APPLYAI_MAIL_PORT", 1025))
    MAIL_USE_TLS = False
    MAIL_USE_SSL = os.environ.get("APPLYAI_MAIL_USE_SSL") == "True"
    MAIL_USERNAME = os.environ.get("APPLYAI_MAIL_USERNAME", "info@applyai.nl")
    MAIL_PASSWORD = os.environ.get("APPLYAI_MAIL_PASSWORD", "12345678")
    MAIL_DEFAULT_SENDER = os.environ.get(
        "APPLYAI_MAIL_DEFAULT_SENDER", "info@applyai.nl"
    )


class ProdConfig(BaseConfig):
    ENV = "prod"
    DEBUG = False


class DevConfig(BaseConfig):
    ENV = "dev"
    DEBUG = True


class TestConfig(BaseConfig):
    TESTING = True
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = "sqlite://"
