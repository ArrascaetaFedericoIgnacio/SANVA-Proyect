from pydantic import BaseModel

class User(BaseModel):
    username : str
    password : str
    email : str

class Login(BaseModel):
    email : str
    password : str