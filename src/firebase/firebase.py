import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

#Credenciales de firebase
firebase_sdk = credentials.Certificate('./sanva-project-54f54-firebase-adminsdk-km05b-b6e691f9f4.json')

#Referencia a la base de datos
firebase_admin.initialize_app(firebase_sdk,{'databaseURL':'https://sanva-project-54f54-default-rtdb.firebaseio.com/'})

ref = db.reference('/gollds')
ref.push({'user':'dasda','password':'Dani123','email':'daniel@gmail.com'})