from django.contrib import admin
from django.urls import path
from . import views
urlpatterns = [
    path('provinces', views.ProvinceView.as_view()),
    path('provinces/<int:id>', views.ProvinceDetail.as_view()),
    path('cities', views.CityView.as_view()),
    path('cities/<int:id>', views.CityDetail.as_view()),
    path('destinations', views.DestinationView.as_view()),
    path('destinations/<int:id>', views.DestinationDetail.as_view()),
    path('destinations/images/<int:destination>', views.ImageDestinationView.as_view()),
    path('experiences', views.ExperienceView.as_view()),
    path('experiences/dest/<int:destination_id>', views.ExperienceListView.as_view()),
    path('experiences/<int:id>', views.ExperienceDetail.as_view()),
    path('experiences/images/<int:id>', views.ImageExperienceView.as_view()),
    path('packages', views.PackageView.as_view()),
    path('packages/<int:id>', views.PackageDetail.as_view()),
    path('hotels', views.AccommodationView.as_view()),
    path('hotels/<int:id>', views.AccommodationDetail.as_view()),
    path('hotels/images/<int:id>', views.ImageAccommodationView.as_view()),
    path('features', views.FtServiceView.as_view()),
]
