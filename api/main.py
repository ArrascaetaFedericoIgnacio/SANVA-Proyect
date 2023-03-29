from fastapi import FastAPI
from fastapi.responses import JSONResponse
from schemas import User
from firebase.post_user import run as run_post_user

app = FastAPI()

@app.get("/")
def index():
    return ("hola mundo")

@app.post('/user')
def post_user(user : User):
    try:
        new_user = {
            "username" : user.user,
            "password" : user.password,
            "email" : user.email
        }
        run_post_user(new_user)
        return "usuario creado"
    except Exception as e:
        return {"error": str(e)}