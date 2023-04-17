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
            "weight": user["weight"]
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
            "comments": take["comments"]
            }