class Order:

    def __init__(self,id,experience_id,user_id,pay_id):
        self.id = id
        self.experience_id = experience_id
        self.user_id = user_id
        self.pay_id = pay_id
        
    

    def __str__(self) -> str:
        return f"{self.id} - {self.description}"