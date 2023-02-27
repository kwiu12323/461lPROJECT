from flask import Blueprint
from .extensions import mongo

main = Blueprint('main', __name__)

@main.route('/')
def index():    #this is temporary, im just adding a new user to the database to see if mongodb and backend is connected
    user_collection = mongo.db.users
    user_collection.insert_one({"name" : "testing name"})
    return '<h1>Added a User!</h1>'