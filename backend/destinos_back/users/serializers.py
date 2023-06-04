from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from travels.models import Address
from travels.serializers import AddressSerializer

User = get_user_model()




class UserSerializer(serializers.ModelSerializer):
    address = AddressSerializer()  # Nested serializer field for address

    class Meta:
        model = User
        fields = ['pk', 'username', 'first_name', 'last_name', 'email', 'password', 'dni', 'phone', 'photo', 'address', 'rol']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password')
        validated_data['password'] = make_password(password)
        address_data = validated_data.pop('address')
        address = Address.objects.create(**address_data)
        user = User.objects.create(address=address, **validated_data)
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
        
