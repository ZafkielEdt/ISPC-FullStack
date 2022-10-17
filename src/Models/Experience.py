from . import Destino

class Experience(Destino):

    def __init__(self,id,name, location,image, description, price):
        super().__init__(self,id,name, location, image)
        self.description = description
        self.price = price
        
    

    def __str__(self):
        return f"{self.name} - {self.location} - {self.description} - {self.price}"