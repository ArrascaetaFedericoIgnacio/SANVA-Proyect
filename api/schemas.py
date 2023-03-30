from pydantic import BaseModel

class User(BaseModel):
    user : str
    password : str
    email : str

class Login_user(BaseModel):
    email : str
    password : str