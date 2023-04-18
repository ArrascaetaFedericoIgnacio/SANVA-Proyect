from fastapi import APIRouter, HTTPException, status
from mongoDB.functions import search_user, populate
from mongoDB.mySchema.models import User, Login, Take, Drug, Disease, Allergie, Supply, Service
from mongoDB.mySchema.hooks import user_schema, users_schema, takes_schema
from mongoDB.client import db
from bson import ObjectId

app = APIRouter(prefix="/user", tags=["User"], responses={status.HTTP_404_NOT_FOUND: {"description": "Not found"}})

# ---------- Users ----------

@app.get("/", response_model=list[User])
async def index():
    return users_schema(db.users.find())

@app.post("/", response_model=User)
async def post_user(user: User):
    if type(search_user("email", user.email)) == User:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="El usuario ya existe")
    user_dict = dict(user)
    del user_dict["id"]
    id = db.users.insert_one(user_dict).inserted_id
    new_user = user_schema(db.users.find_one({"_id": id}))
    return User(**new_user)

@app.get("/email/{email}", response_model=User)
async def get_user_by_email(email : str):
    try:
        find_user = search_user("email", email)
        if type(find_user) == User:
            return find_user
        return "User not found"
    except Exception as e:
        return {"error": str(e)}

@app.get("/username/{username}", response_model=User)
async def get_user_by_username(username : str):
    try:
        find_user = search_user("username", username)
        if type(find_user) == User:
            return find_user
        return "User not found"
    except Exception as e:
        return {"error": str(e)}

@app.get("/id/{id}")
async def user(id: str):
    return search_user("_id", ObjectId(id))

@app.put("/id/{id}", response_model=User)
async def user(id: str, user: User):
    found = db.users.find_one_and_update(
        {"_id": ObjectId(id)},
        {"$set": dict(user)},
        return_document=True
    )
    if found:
        return User(**user_schema(found))
    if not found:
        return {"updated": False}
    
@app.delete("/id/{id}")
async def user(id: str):
    found = db.users.find_one_and_delete({"_id": ObjectId(id)})
    if found:
        return {"deleted": True}
    if not found:
        return {"deleted": False}


@app.post("/login", response_model = User)
async def login(login: Login):
    try:
        find_user = search_user("username", login.username)
        if type(find_user) == User:
            if find_user.password == login.password:
                find_user = populate(find_user)
                return find_user
            return "Wrong password"
        return "User not found"
    except Exception as e:
        return {"error": str(e)}
    
# ---------- Takes ----------

@app.get("/take", response_model=list[Take])
async def index():
    return takes_schema(db.takes.find())
    
@app.post("/take", response_model=User)
async def post_take(take: Take):
    take_dict = dict(take)
    del take_dict["id"]
    db.takes.insert_one(take_dict).inserted_id
    find_user = search_user("_id", ObjectId(take.user_id))
    find_user = populate(find_user)
    return find_user

# ---------- Drugs ----------

@app.post("/drug", response_model=User)
async def post_drug(drug: Drug):
    drug_dict = dict(drug)
    del drug_dict["id"]
    db.drugs.insert_one(drug_dict).inserted_id
    find_user = search_user("_id", ObjectId(drug.user_id))
    find_user = populate(find_user)
    return find_user

# ---------- Disease ----------

@app.post("/disease", response_model=User)
async def post_drug(disease: Disease):
    disease_dict = dict(disease)
    del disease_dict["id"]
    db.diseases.insert_one(disease_dict).inserted_id
    find_user = search_user("_id", ObjectId(disease.user_id))
    find_user = populate(find_user)
    return find_user

# ---------- Allergie ----------

@app.post("/allergie", response_model=User)
async def post_allergie(allergie: Allergie):
    allergie_dict = dict(allergie)
    del allergie_dict["id"]
    db.allergies.insert_one(allergie_dict).inserted_id
    find_user = search_user("_id", ObjectId(allergie.user_id))
    find_user = populate(find_user)
    return find_user

# ---------- Supply ----------

@app.post("/supply", response_model=User)
async def post_supply(supply: Supply):
    supply_dict = dict(supply)
    del supply_dict["id"]
    db.supplies.insert_one(supply_dict).inserted_id
    find_user = search_user("_id", ObjectId(supply.user_id))
    find_user = populate(find_user)
    return find_user

# ---------- Services ----------

@app.post("/service", response_model=User)
async def post_service(service: Service):
    service_dict = dict(service)
    del service_dict["id"]
    # db.services.insert_one(service_dict).inserted_id
    find_user = search_user("_id", ObjectId(service.user_id))
    find_user = populate(find_user)
    return find_user