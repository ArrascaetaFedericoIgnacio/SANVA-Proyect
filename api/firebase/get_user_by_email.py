import firebase_admin
from firebase_admin import credentials, db

    #Credenciales de firebase
firebase_sdk = credentials.Certificate("./sanva-project-54f54-firebase-adminsdk-km05b-b6e691f9f4.json")

    #Referencia a la base de datos
firebase_admin.initialize_app(firebase_sdk,{'databaseURL':'https://sanva-project-54f54-default-rtdb.firebaseio.com/'})

def get_user(email):
    ref = db.reference('/User')
    users = ref.order_by_child('email').equal_to(email).get()
    if users:
        user_id, user_info = users.popitem()
        return {'user_id': user_id, **user_info}
    else:
        return None