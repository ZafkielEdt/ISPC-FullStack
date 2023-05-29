from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path('provinces', views.ProvinceView.as_view()),
    path('cities', views.CityView.as_view()),
    path('destinations', views.DestinationView.as_view()),
    path('experiences', views.ExperienceView.as_view()),
    path('packages', views.PackageView.as_view()),
    path('hotels', views.AccommodationView.as_view()),
    path('features', views.FtServiceView.as_view()),
]
