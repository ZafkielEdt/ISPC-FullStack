from django.db import models
from users.models import User
import uuid




class Province(models.Model):
    name = models.CharField(max_length=30)
    lat = models.DecimalField(max_digits=10, decimal_places=8)
    lon = models.DecimalField(max_digits=10, decimal_places=8)
    def __str__(self) -> str:
        return self.name

class City(models.Model):
    name = models.CharField(max_length=30)
    lat = models.DecimalField(max_digits=10, decimal_places=8)
    lon = models.DecimalField(max_digits=10, decimal_places=8)
    province = models.ForeignKey(Province, on_delete=models.CASCADE)
    def __str__(self) -> str:
        return self.name

class Address(models.Model):
    street = models.CharField(max_length=100)
    number = models.CharField(max_length=10)
    zip_code = models.CharField(max_length=10)


class FeatureService(models.Model):
    name = models.CharField(max_length=30)
    def __str__(self) -> str:
        return self.name

class Accommodation(models.Model):
    name = models.CharField(max_length=30)
    address = models.ForeignKey(Address, on_delete=models.CASCADE)
    city = models.ForeignKey(City, on_delete=models.CASCADE)
    lat = models.DecimalField(max_digits=10, decimal_places=8)
    lon = models.DecimalField(max_digits=10, decimal_places=8)
    stars = models.IntegerField(default=0)
    services = models.ManyToManyField(FeatureService)
    price = models.FloatField()
    def __str__(self) -> str:
        return self.name


class ImageAccommodation(models.Model):
    url = models.FileField(upload_to='destinos-cba')
    title = models.CharField(max_length=30)
    accommodation = models.ForeignKey(Accommodation, on_delete=models.CASCADE)

class Destination(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField()
    city = models.ForeignKey(City, on_delete=models.CASCADE)
    def __str__(self) -> str:
        return self.name

class ImageDestination(models.Model):
    url = models.FileField(upload_to='destinos-cba')
    title = models.CharField(max_length=30)
    destination = models.ForeignKey(Destination, on_delete=models.CASCADE, related_name='images')



class Experience(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    price = models.FloatField()
    destination = models.ForeignKey(Destination, on_delete=models.CASCADE)
    def __str__(self) -> str:
        return self.name
class ImageExperience(models.Model):
    url = models.FileField(upload_to='destinos-cba')
    title = models.CharField(max_length=30)
    experience = models.ForeignKey(Experience, on_delete=models.CASCADE, related_name='images')

class ExpDestination(models.Model):
    url = models.CharField(max_length=500)
    title = models.CharField(max_length=30)
    experience = models.ForeignKey(Experience, on_delete=models.CASCADE)

class Package(models.Model):
    title = models.CharField(max_length=50)
    start_date = models.DateField()
    end_date = models.DateField()
    total_price = models.FloatField()
    rate = models.FloatField(default=0)
    destination = models.ForeignKey(Destination, on_delete=models.CASCADE)
    def __str__(self) -> str:
        return self.title


class Client(models.Model):
    id = models.UUIDField(primary_key = True,default = uuid.uuid4,editable = False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Payment(models.Model):
    amount = models.FloatField()
    payment_method = models.CharField(max_length=5)
    payment_status = models.CharField(max_length=5)

class Order(models.Model):
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    package = models.ForeignKey(Package, on_delete=models.CASCADE)
    payment = models.ForeignKey(Payment, on_delete=models.CASCADE)


