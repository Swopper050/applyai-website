import pytest

from app.app import create_app
from app.config import TestConfig
from app.extensions import db as _db


@pytest.fixture
def app():
    """An application for the tests."""
    _app = create_app(config_object=TestConfig())

    with _app.app_context():
        _db.create_all()

    ctx = _app.test_request_context()
    ctx.push()

    yield _app

    ctx.pop()


@pytest.fixture
def client(app):
    return app.test_client()


@pytest.fixture
def db(app):
    """A database for the tests."""
    with app.app_context():
        _db.create_all()

    yield _db

    # Explicitly close DB connection
    _db.session.close()
    _db.drop_all()
