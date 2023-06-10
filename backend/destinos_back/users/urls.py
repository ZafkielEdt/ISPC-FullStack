from django.contrib import admin
from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

# router = DefaultRouter()
# router.register('users', views.UserDetail, basename='user')


urlpatterns = [
    path('users', views.UserList.as_view()),
    path('api/token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('users/username/<str:username>/', views.UserByUsernameView.as_view()),
    path('users/<int:pk>', views.UserDetail.as_view()),
] 
