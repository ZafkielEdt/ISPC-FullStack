from django.db import models
from django.contrib.auth.models import AbstractUser


class Rol(models.TextChoices):
    ADMIN = 'ADM', 'Admin'
    CUSTOMER = 'CUS', 'Customer'
class User(AbstractUser):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    dni = models.CharField(max_length=8,blank=True, null=True)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15,blank=True, null=True)
    photo = models.CharField(max_length=255,blank=True, null=True)
    address = models.ForeignKey('travels.Address', on_delete=models.CASCADE,blank=True, null=True)
    rol = models.CharField(max_length=3, choices=Rol.choices,default=Rol.CUSTOMER)
        
        
    def __str__(self):
        return self.username + " | " + self.email + " | " + self.rol