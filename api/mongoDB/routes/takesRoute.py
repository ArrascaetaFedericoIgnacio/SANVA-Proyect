from fastapi import APIRouter, HTTPException, status
from mongoDB.user import search_take
from mongoDB.mySchema.models import Take
from mongoDB.mySchema.hooks import take_schema, takes_schema
from mongoDB.client import db

app = APIRouter(prefix="/user", tags=["User"], responses={status.HTTP_404_NOT_FOUND: {"description": "Not found"}})

@app.post("/", response_model=Take) #sin finalizar
async def post_take(take: Take):
    take_dict = dict(take)
    del take_dict["id"]

    id = db.takes.insert_one(take_dict).inserted_id

    new_take = take_schema(db.takes.find_one({"_id": id}))

    return Take(**new_take)