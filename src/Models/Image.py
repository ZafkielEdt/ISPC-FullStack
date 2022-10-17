class Image:

    def __init__(self,id,path):
        self.id = id
        self.path = path
    

    def __str__(self):
        return f"{self.id} - {self.path}"