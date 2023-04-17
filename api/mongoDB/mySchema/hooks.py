from mongoDB.client import db

# ---------- User ----------

def users_schema(users) -> list:
    return [user_schema(user) for user in users]

def user_schema(user) -> dict:
    return {"id": str(user["_id"]),
            "username": user["username"],
            "email": user["email"],
            "password": user["password"],
            "birthdate": user["birthdate"],
            "gender": user["gender"],
            "height": user["height"],
            "weight": user["weight"],
            "user_takes": user["user_takes"],
            }

# ---------- Takes ----------

def takes_schema(takes) -> list:
    return [take_schema(take) for take in takes]

def take_schema(take) -> dict:
    return {"id": str(take["_id"]),
            "type": take["type"],
            "stock": take["stock"],
            "inputPerDay": take["inputPerDay"],
            "periodOfUse": take["periodOfUse"],
            "provider": take["provider"],
            "user_id": take["user_id"],
            "comments": take["comments"],
            }

# def take_schema(take) -> dict:
#     return {"id": str(take["_id"]),
#             "user": db.users.aggregate([{"$match": {"_id": take["user"]}}, 
#                     {"$lookup": 
#                     {"from": "users", 
#                     "localField": "user", 
#                     "foreignField": "_id", 
#                     "as": "user"}}, 
#                     {"$unwind": "$user"}])[0]["user"],
#                     "type": take["type"],
#                     "stock": take["stock"],
#                     "inputPerDay": take["inputPerDay"],
#                     "periodOfUse": take["periodOfUse"],
#                     "provider": take["provider"],
#                     "comments": take["comments"]
#             }

# def take_schema(take) -> dict:
#     user_lookup = {
#         "$lookup": {
#         "from": "users",
#         "localField": "user",
#         "foreignField": "_id",
#         "as": "user_details"
#     }
#     }

#     user_unwind = {
#         "$unwind": {
#         "path": "$user_details",
#         "preserveNullAndEmptyArrays": True
#     }
#     }

#     return {
#         "id": str(take["_id"]),
#         "user": {
#             "id": str(take["user"]),
#             "username": take["user_details"][0]["username"],
#             "email": take["user_details"][0]["email"],
#             "birthdate": take["user_details"][0]["birthdate"],
#             "gender": take["user_details"][0]["gender"],
#             "height": take["user_details"][0]["height"],
#             "weight": take["user_details"][0]["weight"]
#         },
#         "type": take["type"],
#         "stock": take["stock"],
#         "inputPerDay": take["inputPerDay"],
#         "periodOfUse": take["periodOfUse"],
#         "provider": take["provider"],
#         "comments": take["comments"]
#     }