import mysql.connector 
from mysql.connector import Error



class Dao:
    def __init__(self):
        try:
            self.connection = mysql.connector.connect(
                                host = 'localhost',                 
                                user = 'root',             # propio
                                password = 'admin12345',   # propio
                                database = 'destinocba'             
                            )
        except Error as e:
            print(f"Conexion no establecida: {e}")
    
    def getAllUsers(self):
        if self.connection.is_connected():
            try:
                cursor = self.connection.cursor()
                select_user_query = "SELECT * FROM user ORDER BY name ASC"
                cursor.execute(select_user_query)
                lista = cursor.fetchall()
                return lista
            except Error as e:
                print(f"Error: {e}")
    

    def getUser(self,user):
        if self.connection.is_connected():
            try:
                cursor = self.connection.cursor()
                select_user_query = "SELECT * FROM user WHERE id =  %s"
                cursor.execute(select_user_query,(user[0],))
                lista = cursor.fetchall()
                return lista
            except Error as e:
                print(f"Error: {e}")     


    def createUser(self,user):
        if self.connection.is_connected():
            try:
                cursor = self.connection.cursor()
                add_user_query = "INSERT INTO User(name, email, password, role_user) values(%s,%s,%s,%s);"
                cursor.execute(add_user_query,(user[0],user[1],user[2],user[3]))
                self.connection.commit()
                print("Usuario creado con éxito")
            except Error as e:
                print(f"Error: {e}")
    def updateUser(self,user):
        if self.connection.is_connected():
            try:
                cursor = self.connection.cursor()
                update_user_query = "UPDATE User SET name = %s , email = %s, password = %s, role_user = %s WHERE id = %s;"
                cursor.execute(update_user_query,(user[0],user[1],user[2],user[3],user[4]))
                self.connection.commit()
                print("Usuario actualizado con éxito")
            except Error as e:
                print(f"Error: {e}")
    def deleteUser(self,user_id):
        if self.connection.is_connected():
            try:
                cursor = self.connection.cursor()
                delete_user_query = "DELETE FROM user WHERE id = '%s';"
                cursor.execute("DELETE FROM user WHERE id = '%s';",(user_id,))
                self.connection.commit()
                print("Usuario eliminado!")
            except Error as e:
                print(f"Error: {e}")
                                
            



# cursor.execute("CREATE DATABASE destinocba")

# cursor.execute("""CREATE TABLE Role(
#                     id_role INT AUTO_INCREMENT PRIMARY KEY,
#                     role_name VARCHAR(45)
#                 )""")

# cursor.execute("""CREATE TABLE User(
#                     id INT AUTO_INCREMENT PRIMARY KEY,
#                     name VARCHAR(45),
#                     email VARCHAR(45),
#                     password VARCHAR(45),
#                     role_user INT,
#                     FOREIGN KEY (role_user) REFERENCES Role(id_role)

#                 )""")

