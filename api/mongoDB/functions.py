from mongoDB.mySchema.hooks import user_schema, take_schema, takes_schema
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

def populate_user(user):
    try:
        user_takes = []
        takes = list(db.takes.find())
        for take in takes:
            if user.id == take["user_id"]:
                user_takes.append(take_schema(take))
        print("marmota: ",type(user_takes))
        return user_takes
    except Exception as e:
        return {"error": str(e)}