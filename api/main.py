from fastapi import FastAPI
from schemas import User, Login
from firebase.firebase_crud import get_user, find_user, post_user
import firebase_admin
from firebase_admin import credentials

#Credenciales de firebase
firebase_sdk = credentials.Certificate("./sanva-project-54f54-firebase-adminsdk-km05b-b6e691f9f4.json")

#Referencia a la base de datos
firebase_admin.initialize_app(firebase_sdk,{'databaseURL':'https://sanva-project-54f54-default-rtdb.firebaseio.com/'})


app = FastAPI()

@app.get("/")
def index():
    return ("hola mundo")

@app.post('/user')
async def register_user(user : User):
    try:
        new_user = {
            "username" : user.username,
            "password" : user.password,
            "email" : user.email
        }
        post_user(new_user)
        if new_user:
            return "User successfully registered"
    except Exception as e:
        return {"error": str(e)}
    
@app.get("/user/{email}")
async def get_user_by_email(email : str):
    try:
        find_user = get_user(email)
        if find_user:
            return find_user
        return "User not found"
    except Exception as e:
        return {"error": str(e)}
    
@app.post("/login")
async def log_in_user(user : Login):
    try:
        return find_user(user.email, user.password)
    except Exception as e:
        return {"error" : e}

