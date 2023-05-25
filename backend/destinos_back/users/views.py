from rest_framework import generics
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.exceptions import AuthenticationFailed
from .serializers import UserSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
import datetime,jwt
from rest_framework.decorators import permission_classes
from rest_framework.permissions import AllowAny

User = get_user_model()

    



@permission_classes([AllowAny])
class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserByUsernameView(APIView):
    def get(self, request, username):
        try:
            user = User.objects.get(username=username)
            serialized_user = UserSerializer(user)
            return Response(serialized_user.data)
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=404)

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username

        # ...

        return token
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
