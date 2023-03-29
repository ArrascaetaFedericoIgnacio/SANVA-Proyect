from fastapi import FastAPI
from fastapi.responses import JSONResponse
from schemas import User
from firebase.post_user import run as run_post_user

app = FastAPI()

@app.post('/user')
async def post_user(user : User):
    new_user = run_post_user(user)
    return JSONResponse(content=new_user)