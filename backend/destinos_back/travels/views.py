from rest_framework import generics
from .models import *
from rest_framework.permissions import AllowAny
from rest_framework.decorators import permission_classes
from .serializers import *

class AddressApi(generics.ListCreateAPIView):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer

@permission_classes([AllowAny])
class CityView(generics.ListCreateAPIView):
    queryset = City.objects.all()
    serializer_class = CitySerializer

@permission_classes([AllowAny])
class ProvinceView(generics.ListCreateAPIView):
    queryset = Province.objects.all()
    serializer_class = ProvinceSerializer

@permission_classes([AllowAny])
class DestinationView(generics.ListCreateAPIView):
    queryset = Destination.objects.all()
    serializer_class = DestinationSerializer

@permission_classes([AllowAny])
class ExperienceView(generics.ListCreateAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

@permission_classes([AllowAny])
class PackageView(generics.ListCreateAPIView):
    queryset= Package.objects.all()
    serializer_class= PackageSerializer

@permission_classes([AllowAny])
class AccommodationView(generics.ListCreateAPIView):
    queryset= Accommodation.objects.all()
    serializer_class= AccommodationSerializer
    
@permission_classes([AllowAny])
class FtServiceView(generics.ListCreateAPIView):
    queryset= FeatureService.objects.all()
    serializer_class= FtServiceSerializer