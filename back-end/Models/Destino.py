class Destino:

    def __init__(self,id,name, description, information, location, image):
        self.id = id
        self.name = name
        self.description = description
        self.information = information
        self.location = location
        self.image = image
    

    def __str__(self) -> str:
        return f"{self.name} - {self.description} - {self.location}"