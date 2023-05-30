from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from travels.models import Address
from travels.serializers import AddressSerializer

User = get_user_model()




class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['pk','username', 'first_name', 'last_name', 'email','password', 'dni', 'phone', 'photo', 'rol']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password')
        validated_data['password'] = make_password(password)
        user = User.objects.create(**validated_data)
        return user


class LoginSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['username', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }
    
    def validate(self, data):
        pass
        
