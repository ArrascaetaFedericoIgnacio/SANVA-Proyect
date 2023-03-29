from fastapi import FastAPI
from schemas import User
from firebase.post_user import run as run_post_user
from firebase.get_user_by_email import get_user

app = FastAPI()

@app.get("/")
def index():
    return ("hola mundo")

@app.post('/user')
async def post_user(user : User):
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
    
@app.get("/user/{email}")
async def get_user_by_email(email : str):
    try:
        find_user = get_user(email)
        if find_user:
            return find_user
        return "user not found"
    except Exception as e:
        return {"error": str(e)}
