from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path('provinces', views.ProvinceView.as_view()),
    path('cities', views.CityView.as_view()),
    path('destinations', views.DestinationView.as_view()),
]
