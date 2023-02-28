
from flask import Flask
from .extensions import mongo
from .main import main
from flask_cors import CORS

def create_app(config_object='backend.settings'):
    app = Flask(__name__)
    CORS(app)
    app.config.from_object(config_object)

    mongo.init_app(app)

    app.register_blueprint(main)
    return app