from django.db import models
from users.models import User

import uuid




class Province(models.Model):
    name = models.CharField(max_length=30)
    lat = models.DecimalField(max_digits=10, decimal_places=8)
    lon = models.DecimalField(max_digits=10, decimal_places=8)

class City(models.Model):
    name = models.CharField(max_length=30)
    lat = models.DecimalField(max_digits=10, decimal_places=8)
    lon = models.DecimalField(max_digits=10, decimal_places=8)
    province = models.ForeignKey(Province, on_delete=models.CASCADE)

class Address(models.Model):
    street = models.CharField(max_length=100)
    city = models.ForeignKey(City, on_delete=models.CASCADE)

class Destination(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=255)
    city = models.ForeignKey(City, on_delete=models.CASCADE)

class Image(models.Model):
    url = models.CharField(max_length=255)
    title = models.CharField(max_length=50)
    destination = models.ForeignKey(Destination, on_delete=models.CASCADE)

class Experience(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=255)
    price = models.FloatField()
    destination = models.ForeignKey(Destination, on_delete=models.CASCADE)

class Package(models.Model):
    start_date = models.DateField()
    end_date = models.DateField()
    total_price = models.FloatField()
    destination = models.ForeignKey(Destination, on_delete=models.CASCADE)
    experience = models.ForeignKey(Experience, on_delete=models.CASCADE)

class Payment(models.Model):
    amount = models.FloatField()
    payment_method = models.CharField(max_length=5)
    payment_status = models.CharField(max_length=5)

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    package = models.ForeignKey(Package, on_delete=models.CASCADE)
    payment = models.ForeignKey(Payment, on_delete=models.CASCADE)

class Client(models.Model):
        id = models.UUIDField(primary_key = True,default = uuid.uuid4,editable = False)
        user = models.ForeignKey(User, on_delete=models.CASCADE)
        name = models.CharField(max_length=30)
        last_name = models.CharField(max_length=30)
        created_at = models.DateTimeField(auto_now_add=True)
        updated_at = models.DateTimeField(auto_now=True)