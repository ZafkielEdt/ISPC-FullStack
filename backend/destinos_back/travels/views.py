from django.shortcuts import get_object_or_404
from rest_framework import generics, status
from .models import *
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework.decorators import permission_classes
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import *

class AddressApi(generics.ListCreateAPIView):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer

@permission_classes([AllowAny])
class CityView(generics.ListCreateAPIView):
    queryset = City.objects.all()
    serializer_class = CitySerializer
    
@permission_classes([AllowAny])
class CityDetail(generics.RetrieveAPIView):
    queryset = City.objects.all()
    serializer_class = CitySerializer
    lookup_field = 'id'
    
    def get(self, request, id=None):
        cities = City.objects.filter(id=id)
        serializer = CitySerializer(cities, many=True)
        return Response(serializer.data)
    
    @permission_classes([IsAdminUser])
    def put(self, request, id=None):
        cities = City.objects.get(id=id)
        serializer = CitySerializer(cities, request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    @permission_classes([IsAdminUser])
    def delete(self, request, id=None):
        cities = City.objects.filter(id=id)
        cities.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@permission_classes([AllowAny])
class ProvinceView(generics.ListCreateAPIView):
    queryset = Province.objects.all()
    serializer_class = ProvinceSerializer
    
class ProvinceDetail(generics.RetrieveAPIView):
    queryset = Province.objects.all()
    serializer_class = ProvinceSerializer
    lookup_field = 'id'
    
    @permission_classes([IsAdminUser])
    def put(self, request, id=None):
        provinces = Province.objects.get(id=id)
        serializer = ProvinceSerializer(provinces, request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    @permission_classes([IsAdminUser])
    def delete(self, request, id=None):
        provinces = Province.objects.filter(id=id)
        provinces.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@permission_classes([AllowAny])
class DestinationView(generics.ListCreateAPIView):
    queryset = Destination.objects.all()
    serializer_class = DestinationSerializer

@permission_classes([AllowAny])
class DestinationDetail(generics.RetrieveAPIView):
    queryset = Destination.objects.all()
    serializer_class = DestinationSerializer
    lookup_field = 'id'
    
    @permission_classes([IsAdminUser])
    def put(self, request, id=None):
        destinations = Destination.objects.get(id=id)
        serializer = DestinationSerializer(destinations, request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    @permission_classes([IsAdminUser])
    def delete(self, request, id=None):
        destinations = Destination.objects.filter(id=id)
        destinations.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

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
class ImageDestinationView(generics.ListAPIView):
    serializer_class = ImageDestinationSerializer
    lookup_url_kwarg = 'destination'

    def get_queryset(self):
        destination_id = self.kwargs.get('destination')
        destination = get_object_or_404(Destination, id=destination_id)
        queryset = ImageDestination.objects.filter(destination=destination)
        return queryset

@permission_classes([AllowAny])
class ImageExperienceView(generics.ListCreateAPIView):
    queryset = ImageExperience.objects.all()
    serializer_class = ImageExperienceSerializer

@permission_classes([AllowAny])
class ImageAccommodationView(generics.ListCreateAPIView):
    queryset = ImageAccommodation.objects.all()
    serializer_class = ImageAccommodationSerializer

@permission_classes([AllowAny])
class OrderView(APIView):
    def get(self, request):
        orders = Order.objects.all()
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@permission_classes([AllowAny])  
class ClientView(APIView):
    def get(self, request):
        clients = Client.objects.all()
        serializer = ClientSerializer(clients, many=True)
        return Response(serializer.data)
@permission_classes([AllowAny])
class OrderByIdView(APIView):
    def get(self, request, order_id):
        try:
            order = Order.objects.get(id=order_id)
            serializer = OrderSerializer(order)
            return Response(serializer.data)
        except Order.DoesNotExist:
            return Response({'error': 'Order not found'}, status=status.HTTP_404_NOT_FOUND)
@permission_classes([AllowAny])
class OrdersByClientView(APIView):
    def get(self, request, client_id):
        try:
            client = Client.objects.get(id=client_id)
            orders = Order.objects.filter(client=client)
            serializer = OrderSerializer(orders, many=True)
            return Response(serializer.data)
        except Client.DoesNotExist:
            return Response({'error': 'Client not found'}, status=status.HTTP_404_NOT_FOUND)