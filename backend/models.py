from typing import TypedDict

class User(TypedDict):
    username: str
    userID: str
    password: str

class Project(TypedDict):
    name: str
    userID: str
    projectId: str
    descpiption: str