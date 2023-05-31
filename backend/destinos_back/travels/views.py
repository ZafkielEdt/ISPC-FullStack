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
class DestinationDetail(generics.RetrieveAPIView):
    queryset = Destination.objects.all()
    serializer_class = DestinationSerializer
    lookup_field = 'id'

@permission_classes([AllowAny])
class ExperienceView(generics.ListCreateAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

@permission_classes([AllowAny])
class ExperienceListView(generics.ListAPIView):
    serializer_class = ExperienceSerializer

    def get_queryset(self):
        destination_id = self.kwargs['destination_id']
        queryset = Experience.objects.filter(destination=destination_id)
        return queryset
@permission_classes([AllowAny])
class ExperienceDetail(generics.RetrieveAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer
    lookup_field = 'id'

@permission_classes([AllowAny])
class PackageView(generics.ListCreateAPIView):
    queryset= Package.objects.all()
    serializer_class= PackageSerializer

@permission_classes([AllowAny])
class AccommodationView(generics.ListCreateAPIView):
    queryset= Accommodation.objects.all()
    serializer_class= AccommodationSerializer

class AccommodationDetail(generics.RetrieveAPIView):
    queryset = Accommodation.objects.all()
    serializer_class = AccommodationSerializer
    lookup_field = 'id'


    
@permission_classes([AllowAny])
class FtServiceView(generics.ListCreateAPIView):
    queryset= FeatureService.objects.all()
    serializer_class= FtServiceSerializer

@permission_classes([AllowAny])
class PackageDetail(generics.RetrieveAPIView):
    queryset = Package.objects.all()
    serializer_class = PackageSerializer
    lookup_field = 'id'


@permission_classes([AllowAny])
class ImageDestinationView(generics.ListCreateAPIView):
    queryset = ImageDestination.objects.all()
    serializer_class = ImageDestinationSerializer

@permission_classes([AllowAny])
class ImageExperienceView(generics.ListCreateAPIView):
    queryset = ImageExperience.objects.all()
    serializer_class = ImageExperienceSerializer

@permission_classes([AllowAny])
class ImageAccommodationView(generics.ListCreateAPIView):
    queryset = ImageAccommodation.objects.all()
    serializer_class = ImageAccommodationSerializer
