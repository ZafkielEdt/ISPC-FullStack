from rest_framework import serializers
from .models import *

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ['street','number','zip_code']
    
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

class ImageDestinationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageDestination
        fields = '__all__'

class DestinationSerializer(serializers.ModelSerializer):
    images = ImageDestinationSerializer(many=True)
    city = CitySerializer()
    class Meta:
        model = Destination
        fields = ['id','name','description','city','images']

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'

class PackageSerializer(serializers.ModelSerializer):
    destination = DestinationSerializer()
    class Meta:
        model = Package
        fields = '__all__'

class FtServiceSerializer(serializers.ModelSerializer):
    class Meta: 
        model = FeatureService
        fields = '__all__'

class AccommodationSerializer(serializers.ModelSerializer):
    address = AddressSerializer()
    services = serializers.StringRelatedField(many=True, read_only = True)
    class Meta: 
        model = Accommodation
        fields = '__all__'
    def create(self, validated_data):
        address_data = validated_data.pop('address')  
        address = Address.objects.create(**address_data)
        accomodation = Accommodation.objects.create(address = address,**validated_data)
        return accomodation

class ImageExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = None 
        fields = ('url', 'title')

class ImageAccommodationSerializer(serializers.ModelSerializer):
    class Meta:
        model = None 
        fields = ('url', 'title')



class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ['id','user', 'name', 'last_name']

class PaymentInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaymentInfo
        fields = ['card_number', 'card_type', 'name', 'dni', 'cvv', 'exp_month', 'exp_year']

class OrderSerializer(serializers.ModelSerializer):
    client = ClientSerializer()  # Nested serializer for Client
    payment = PaymentInfoSerializer()  # Nested serializer for PaymentInfo

    class Meta:
        model = Order
        fields = ['amount', 'client', 'package', 'payment', 'status', 'created_at']

    def create(self, validated_data):
        client_data = validated_data.pop('client')
        payment_data = validated_data.pop('payment')

        client = Client.objects.create(**client_data)
        payment = PaymentInfo.objects.create(**payment_data)

        order = Order.objects.create(client=client, payment=payment, **validated_data)
        return order