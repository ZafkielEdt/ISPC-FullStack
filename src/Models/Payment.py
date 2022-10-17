class Payment:

    def __init__(self,id,method,timestamp,total):
        
        self.id = id
        self.method = method
        self.timestamp = timestamp
        self.total = total
        
    

    def __str__(self):
        return f"{self.id} - {self.method} - {self.timestamp} - {self.total} "