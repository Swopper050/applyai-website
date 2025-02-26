from flask import request
from flask_restx import Resource

from app.extensions import api


@api.route("/multiply")
class Multiply(Resource):
    def get(self):
        x = request.args.get("x")
        y = request.args.get("y")
        if x is None or y is None:
            return {"error": "Please provide both an x and y parameter"}, 400

        return {"result": float(x) * float(y)}
