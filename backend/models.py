from typing import TypedDict
from typing import List
import bson


class User(TypedDict):
    username: str
    userId: str
    password: str

class Project(TypedDict):
    projectName: str
    projectId: str
    descpiption: str
    hwQty: str
    capacity: str
    users: List