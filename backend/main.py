from flask import Blueprint, jsonify, request
from .extensions import mongo
from .cipher import encrypt
from .models import User, Project
main = Blueprint('main', __name__)

USERNAME = "username"
USERID = "userId"
PASSWORD = "password"
PROJECTID = "projectId"
PROJECTNAME = "projectName"
DESCRIPTION = "description"

@main.route('/')
def index():    #this is temporary, im just adding a new user to the database to see if mongodb and backend is connected
    user_collection = mongo.db.users
    user_collection.insert_one({"name" : "testing name123"})
    return '<h1>Backend! Added a name to the database</h1>'

#
# SIGNUP POST BODY CONTENTS:
# { username: <username>
#   userId: <userId>
#   password: <password>
#  }
#
@main.route('/signup', methods=['POST'])
def signup():
    data = request.get_json() # body content
    #username = encrypt(data[USERNAME]) #
    username = data[USERNAME]
    userID = encrypt(data[USERID])
    password = encrypt(data[PASSWORD])
    user = User(username=username, userID=userID, password=password)
    user_collection = mongo.db.users
    result = user_collection.insert_one(user)
    if result.inserted_id:
        return "Success"

    '<h1>Added a User!</h1>'
     # TODO: HIT mongo db 
    # user_collection = mongo.db.users
    # user_collection.insert_one(user)
    #TODO: return json of user object
    


#
# SIGNIN GET URL PARAMETERS:
#  ?userId=<userId>&password: <password>
#  
@main.route('/signin', methods=['GET'])
def signin():
    userID = encrypt(request.args.get(USERID))
    password = encrypt(request.args.get(PASSWORD))
    # TODO: HIT mongo db 
    # user_collection = mongo.db.users
    # user = user_collection.find_one({USERID: userID, PASSWORD: password})
    return 


#
# CREATE PROJECT POST BODY CONTENTS:
# { projectname: <name>
#   projectId: <projectId>
#   description: <description>
#   userId: <userid>
#  }
#
@main.route('/create-project', methods=['POST'])
def createProject():
    data = request.get_json() # body content
    
    projectName = data[PROJECTNAME]
    projectId = data[PROJECTID]
    description = data[DESCRIPTION]
    project = Project(projectName = projectName, projectId=projectId, descpiption=description)

    user_collection = mongo.db.Project1
    result = user_collection.insert_one(project)
    if result.inserted_id:
        return "Success, added a project"
    
    '<h1>Added a Project!</h1>'
    # TODO: HIT mongo db
    

#
# FETCH PROJECT GET URL PARAMETERS:
# ?userId=<userId>&projectId: <projectId>
#
@main.route('/fetch-project', methods=['GET'])
def fetchProject():
    ## see if user signedin has project with project id
    userID = encrypt(request.args.get(USERID))
    projectID = encrypt(request.args.get(PROJECTID))
    #TODO query mongo db for project that has both
    return

@main.route("/members")
def members():
    return {"members": ["Member1","Member2","Member3"]}   

@main.route('/api/data')
def get_data():
    data = {'message': 'Hello from the backend!'}
    return jsonify(data)