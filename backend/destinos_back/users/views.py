from django.conf import settings
from django.dispatch import receiver
from rest_framework import generics
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from .serializers import UserSerializer

User = get_user_model()

    
@receiver(post_save, sender='users.User')
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)



class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class LoginView(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        print(user)
        token = Token.objects.get(user=user)
        if token: print(token.key)
        return Response({
            'token': token.key,
            'id': user.pk,
            'username': user.username
        })