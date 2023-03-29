from fastapi import FastAPI
from firebase.firebase import create_user

app = FastAPI()

@app.get("/")
def index():
   return "hola mundo"


