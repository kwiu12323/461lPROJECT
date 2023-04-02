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
USERS = "users"
FAILED = {"result" : "Failed"}

@main.route('/')
def index():    #this is temporary, im just adding a new user to the database to see if mongodb and backend is connected
    user_collection = mongo.db.users
    user_collection.insert_one({"name" : "testing name444999"})
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
    userId = encrypt(data[USERID])
    password = encrypt(data[PASSWORD])
    user = User(username=username, userId=userId, password=password)
    user_collection = mongo.db.users
    result = user_collection.insert_one(user)
    if result.inserted_id:
        return {"result": "Success"}
    return FAILED
    


#
# SIGNIN GET URL PARAMETERS:
#  ?userId=<userId>&password=<password>
#  
@main.route('/signin', methods=['GET'])
def signin():
    print("here")
    userId = encrypt(request.args.get(USERID))
    password = encrypt(request.args.get(PASSWORD))
    print(userId, password)
    # TODO: HIT mongo db 
    print("here")
    users = mongo.db.users
    user = users.find_one({USERID: userId})
    print(user)
    if(user != None):
        return {"result": "Sucess"}
    return FAILED


#
# CREATE PROJECT POST BODY CONTENTS:
# { projectname: <name>,
#   projectId: <projectId>,
#   description: <description>,
#   userId: <userid>
#  }
#
@main.route('/create-project', methods=['POST'])
def createProject():
    data = request.get_json() # body content
    print(data)
    projectName = data[PROJECTNAME]
    projectId = data[PROJECTID]
    description = data[DESCRIPTION]
    userId = encrypt(data[USERID])
    project = Project(projectName = projectName, projectId=projectId, descpiption=description, hwQty=0, capacity=100, users=[userId])

    project_collection = mongo.db.projects
    result = project_collection.insert_one(project)
    if result.inserted_id:
        return {"result" : "Success"}
        

#
# FETCH PROJECT GET URL PARAMETERS:
# ?userId=<userId>&projectId: <projectId>
#
@main.route('/fetch-projects', methods=['GET'])
def fetchProject():
    ## see if user signedin has project with project id
    #TODO query mongo db for project that has both
    project_collection = mongo.db.projects.find()
    projects = {}
    for ind, doc in enumerate(project_collection):
        print(doc)
        del doc["_id"]
        projects[ind] = doc
    return projects


#
# JOIN PROJECT POST BODY CONTENTS:
# { 
#   projectId: <projectId>
#   userId: <userId>
#  }
#
@main.route('/join-project', methods=['POST'])
def joinProject():
    data = request.get_json() # body content
    print(data)
    projectId = data[PROJECTID]
    userId = encrypt(data[USERID])
    project_collection = mongo.db.projects
    project = project_collection.find_one({PROJECTID: projectId})
    if project is None:
        return FAILED
    projectUsers = project["users"]
    print(projectUsers)
    if userId in projectUsers:
        return FAILED
    projectUsers.append(userId)
    print(projectUsers)
    result = project_collection.update_one(
        {PROJECTID: projectId},
        {"$set":
            {USERS: projectUsers}
        }                             
    )
    print(result)
    if result.acknowledged:
        return {"result" : "Success"}
    
#
# Leave PROJECT POST BODY CONTENTS:
# { 
#   projectId: <projectId>
#   userId: <userId>
#  }
#
@main.route('/leave-project', methods=['POST'])
def leaveProject():
    data = request.get_json() # body content
    print(data)
    projectId = data[PROJECTID]
    userId = encrypt(data[USERID])
    project_collection = mongo.db.projects
    project = project_collection.find_one({PROJECTID: projectId})
    projectUsers = project["users"]
    if userId in projectUsers:
        projectUsers.remove(userId)
        print(projectUsers)
        result = project_collection.update_one(
            {PROJECTID: projectId},
            {"$set":
                {USERS: projectUsers}
            }                             
        )
        print(result)
        if result.acknowledged:
            return {"result" : "Success"}
        
    return FAILED

#Checkin
# @main.route('/create-project', methods=['POST'])
# def createProject():
#     data = request.get_json() # body content
#     print(data)
#     projectName = data[PROJECTNAME]
#     projectId = data[PROJECTID]
#     description = data[DESCRIPTION]
#     userId = encrypt(data[USERID])
#     project = Project(projectName = projectName, projectId=projectId, descpiption=description, hwQty=0, capacity=100, users=[userId])

#     project_collection = mongo.db.projects
#     result = project_collection.insert_one(project)
#     if result.inserted_id:
#         return {"result" : "Success"}

# @main.route('/checkin', methods=['POST'])
# def checkin():
#     data = request.get_json()
#     print(data)
#     max_quantity = 100

@main.route('/create-HWSet')
def createHWSet():
    # data = request.get_json()
    # name = data['name']
    # maxQuantity = data['maxQuantity']
    # HW_collection = mongo.db.HWSets
    #     user_collection = mongo.db.users
    # user_collection.insert_one({"name" : "testing name444999"})   
    #hwset = {'name' : name, 'maxQuantity' : maxQuantity}
    # hwset = {'name' : "HWSet1", 'maxQuantity' : 100}
    # result = HW_collection.insert_one(hwset)
    #return jsonify({'message': 'HWSet created successfully', 'id': str(result.inserted_id)})
    # if result.inserted_id:
    #     return {"result" : "Success"}
    user_collection = mongo.db.HWSets
    hwset = {'name' : "HWSet1",  'maxQuantity' : 100, 'qty':0}
    user_collection.insert_one(hwset)
    return '<h1>HWSET ADDED! Added a name to the database</h1>'



@main.route('/userList')
def userList():
    response_body = {
        "name" : "exampleName",
        "userId": "exampleUserID",
        "password" :"examplePassword"
        
    }
    return response_body

@main.route('/api/hwsets')
def get_hwsets():
    HW_collection = mongo.db.HWSets
    hwsets = []
    for hwset in HW_collection.find():
        hwsets.append({'_id': str(hwset['_id']), 'name': hwset['name'], 'maxQuantity': hwset['maxQuantity'], 'qty': hwset['qty']})
    response_body = {
        'hwsets': hwsets
        
    }
    return response_body

def get_hwsets():
    # Retrieve hardware sets data from MongoDB
    HW_collection = mongo.db.HWSets
    hwsets = []
    for hwset in HW_collection.find():
        hwsets.append({
            '_id': hwset['_id'],
            'name': hwset['name'],
            'maxQuantity': hwset['maxQuantity'],
            'qty': hwset['qty']
        })
    
    # Return JSON response with hardware sets data
    return jsonify({'hwsets': hwsets})

@main.route('/api/data')
def get_data():
    data = {'message': 'Hello from the backend!'}
    return jsonify(data)

@main.route('/update_quantity', methods=['POST'])
def update_quantity():
    data = request.json
    quantity = data['quantity']
    quantity = int(quantity)
    HW_collection = mongo.db.HWSets
    HW_collection.update_one({'name' : 'HWSet1'}, {'$inc': {'qty': quantity}})
    # Here you can add the logic to update your MongoDB database
    # using the `quantity` value that was passed in the request
    return 'Quantity updated successfully'


if __name__ == "__main__":
    main.run(debug = True)