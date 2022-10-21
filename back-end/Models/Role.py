class Role:
    def __init__(self,id,role_name):
        self.id = id
        self.role_name = role_name
    
    def __str__(self):
        return f"{self.id} - {self.role_name}"