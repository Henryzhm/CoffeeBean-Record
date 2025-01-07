from flask import Blueprint, request, jsonify
from . import mongo

main = Blueprint("main", __name__)

@main.route("/")
def home():
    return jsonify({"message": "Welcome to the Flask + MongoDB API!"})

@main.route("/add", methods=["POST"])
def add_document():
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400
    
    mongo.db.collection.insert_one(data)
    return jsonify({"message": "Document added successfully"}), 201

@main.route("/documents", methods=["GET"])
def get_documents():
    documents = list(mongo.db.collection.find())
    for doc in documents:
        doc["_id"] = str(doc["_id"])  # 将 ObjectId 转换为字符串
    return jsonify(documents)
