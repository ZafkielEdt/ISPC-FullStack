import queue
from connection import *
formulario = [ {
                'id' : 1,
                'name': 'Federico',
                'email': 'fedes77@gmail.com',
                'password': 'contraseñasegura',
                'role_user':1
                } 
]
for usuario in formulario:
    id = usuario.get('id')
    name = usuario.get('name')
    email = usuario.get('email')
    password = usuario.get('password')
    role_user = usuario.get('role_user')  

dao = Dao()

#-------------------------------------

# dao.createUser((name,email,password,role_user))

#-------------------------------------







datos_actualizados = [ {
                'id' : 1,
                'name': 'Alan',
                'email': 'fedes66@gmail.com',
                'password': 'contraseñamassegura',
                'role_user':1
                } 
]
for usuario2 in datos_actualizados:
    
    if usuario2.get('name') != name:
        name = usuario2.get('name')        
    if usuario2.get('email') != email:
        email = usuario2.get('email')
    if usuario2.get('password') != password:
        password = usuario2.get('password')
    if usuario2.get('role_user') != role_user:
        role_user = usuario2.get('role_user')  

#-------------------------------------

# dao.updateUser((name,email,password,role_user,id))

#-------------------------------------







#-------------------------------------

# dao.deleteUser(id)

#-------------------------------------





#devuelve todos los usuarios

def showUsers(users):
    for user in users:
        q = f"{user[0]} | {user[1]} | {user[2]} | {user[3]} | {user[4]} "
        print(q)

# usuarios = dao.getAllUsers()

# showUsers(usuarios)





#-------------------------------------
#devuelve usuario especifico

usuario = dao.getUser((id,))
showUsers(usuario)


#-------------------------------------