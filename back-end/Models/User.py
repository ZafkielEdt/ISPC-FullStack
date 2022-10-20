class User:

    def __init__(self,id,name, email, password, role):
        self.id = id
        self.name = name
        self.email = email
        self.password = password
        self.role = role
        
    

    def __str__(self):
        return f"{self.name} - {self.email} - {self.role}"