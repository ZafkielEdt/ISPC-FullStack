from rest_framework import serializers
from .models import *

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'
    
    def create(self,validated_data):
        address = Address.objects.filter(street=validated_data.get('street'), 
                                         number=validated_data.get('number'), 
                                         zip_code=validated_data.get('zip_code')).first()
        if address:
            return address
        else:
            address = Address.objects.create(**validated_data)
        
        return address


class ProvinceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Province
        fields = '__all__'

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'

class DestinationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Destination
        fields = '__all__'

        