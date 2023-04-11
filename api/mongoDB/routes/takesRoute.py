from fastapi import APIRouter, HTTPException, status
from mongoDB.user import search_take
from mongoDB.mySchema.models import Take
from mongoDB.mySchema.hooks import take_schema, takes_schema
from mongoDB.client import db

app = APIRouter(prefix="/user", tags=["User"], responses={status.HTTP_404_NOT_FOUND: {"description": "Not found"}})

# @app.get("/", response_model=list[Take]) # sin finalizar
# async def index():
#     return takes

@app.post("/", response_model=Take) #sin finalizar
async def post_user(take: Take):
    if type(search_take("email", user.email)) == User:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="El usuario ya existe")

    user_dict = dict(user)
    del user_dict["id"]

    id = db.users.insert_one(user_dict).inserted_id

    new_user = user_schema(db.users.find_one({"_id": id}))

    return User(**new_user)