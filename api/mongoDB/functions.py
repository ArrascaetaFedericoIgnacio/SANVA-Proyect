from mongoDB.mySchema.hooks import user_schema, take_schema, drug_schema, disease_schema, allergie_schema, supply_schema, service_schema
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
    
def populate(user):
    try:
        user.user_takes = populate_user(user, "takes")
        user.user_drugs = populate_user(user, "drugs")
        user.user_diseases = populate_user(user, "diseases")
        user.user_allergies = populate_user(user, "allergies")
        user.user_supplies = populate_user(user, "supplies")
        user.user_services = populate_user(user, "services")
        return user
    except Exception as e:
        return {"error": str(e)}

def populate_user(user, name):
    try:
        to_populate = []
        entries = list(db[name].find())
        for entry in entries:
            if user.id == entry["user_id"]:
                if name == "takes":
                    to_populate.append(take_schema(entry))
                elif name == "drugs":
                    to_populate.append(drug_schema(entry))
                elif name == "diseases":
                    to_populate.append(disease_schema(entry))
                elif name == "allergies":
                    to_populate.append(allergie_schema(entry))
                elif name == "supplies":
                    to_populate.append(supply_schema(entry))
                elif name == "services":
                    to_populate.append(service_schema(entry))
        return to_populate
    except Exception as e:
        return {"error": str(e)}