from mongoDB.mySchema.hooks import user_schema, take_schema
from mongoDB.mySchema.models import User, Take
from mongoDB.client import db

def search_user(field: str, value):
    try:
        user = db.users.find_one({field: value})
        return User(**user_schema(user))
    except Exception as e:
        return {"error": str(e)}

def search_take(field: str, value):
    try:
        take = db.takes.find_one({field: value})
        return Take(**take_schema(take))
    except Exception as e:
        return {"error": str(e)}
