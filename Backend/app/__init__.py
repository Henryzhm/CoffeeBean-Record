from flask import Flask
from flask_pymongo import PyMongo

mongo = PyMongo()

def create_app():
    app = Flask(__name__)
    
    # 配置 MongoDB
    app.config["MONGO_URI"] = "mongodb://localhost:27017/mydatabase"
    mongo.init_app(app)

    # 注册路由
    from .routes import main
    app.register_blueprint(main)

    return app
