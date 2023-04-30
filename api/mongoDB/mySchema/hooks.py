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
            "user_drugs": user["user_drugs"],
            "user_diseases": user["user_diseases"],
            "user_allergies": user["user_allergies"],
            "user_supplies": user["user_supplies"],
            "user_services": user["user_services"],
            }

# ---------- Takes ----------

def takes_schema(takes) -> list:
    return [take_schema(take) for take in takes]

def take_schema(take) -> dict:
    return {"id": str(take["_id"]),
            "type": take["type"],
            "systolicValue": take["systolicValue"],
            "diastolicValue": take["diastolicValue"],
            "glucoseValue": take["glucoseValue"],
            "hearthFrequencyValue": take["hearthFrequencyValue"],
            "date": take["date"],
            "user_id": take["user_id"],
            "comments": take["comments"],
            }

# ---------- Drugs ----------

def drugs_schema(drugs) -> list:
    return [drug_schema(drug) for drug in drugs]

def drug_schema(drug) -> dict:
    return {"id": str(drug["_id"]),
            "name": drug["name"],
            "type": drug["type"],
            "doseAmount": drug["doseAmount"],
            "doseFrequency": drug["doseFrequency"],
            "firstDoseHour": drug["firstDoseHour"],
            "dosingDays": drug["dosingDays"],
            "inventory": drug["inventory"],
            "reminder": drug["reminder"],
            "lackOfInventoryAlert": drug["lackOfInventoryAlert"],
            "user_id": drug["user_id"],
            }

# ---------- Disease ----------

def diseases_schema(diseases) -> list:
    return [disease_schema(disease) for disease in diseases]

def disease_schema(disease) -> dict:
    return {"id": str(disease["_id"]),
            "name": disease["name"],
            "medicName": disease["medicName"],
            "drugName": disease["drugName"],
            "treatment": disease["treatment"],
            "nextDate": disease["nextDate"],
            "alertForDate": disease["alertForDate"],
            "comments": disease["comments"],
            "user_id": disease["user_id"],
            }

# ---------- Allergie ----------

def allergies_schema(allergies) -> list:
    return [allergie_schema(allergie) for allergie in allergies]

def allergie_schema(allergie) -> dict:
    return {"id": str(allergie["_id"]),
            "allergieName": allergie["allergieName"],
            "vaccine": allergie["vaccine"],
            "inventory": allergie["inventory"],
            "vaccineFrequency": allergie["vaccineFrequency"],
            "vaccineReminder": allergie["vaccineReminder"],
            "comments": allergie["comments"],
            "user_id": allergie["user_id"],
            }

# ---------- Supply ----------

def supplies_schema(supplies) -> list:
    return [supply_schema(supply) for supply in supplies]

def supply_schema(supply) -> dict:
    return {"id": str(supply["_id"]),
            "name": supply["name"],
            "type": supply["type"],
            "stock": supply["stock"],
            "supplyPerDay": supply["supplyPerDay"],
            "daysOfUse": supply["daysOfUse"],
            "provider": supply["provider"],
            "comments": supply["comments"],
            "user_id": supply["user_id"],
            }

# ---------- Supply ----------

def services_schema(services) -> list:
    return [service_schema(service) for service in services]

def service_schema(service) -> dict:
    return {"id": str(service["_id"]),
            "name": service["name"],
            "provider": service["provider"],
            "comments": service["comments"],
            "user_id": service["user_id"],
            }