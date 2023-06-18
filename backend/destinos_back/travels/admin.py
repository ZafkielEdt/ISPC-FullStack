from django.contrib import admin

from travels.forms import ImageDestinationForm
from .models import *
# Register your models here.
admin.site.register(Province)
admin.site.register(City)
admin.site.register(Address)
admin.site.register(Package)
admin.site.register(Order)
admin.site.register(Client)
admin.site.register(ImageAccommodation)
admin.site.register(FeatureService)
admin.site.register(ImageDestination)
admin.site.register(ImageExperience)


class ImageDestinationInline(admin.TabularInline):
    model = ImageDestination
    extra = 1


class DestinationAdmin(admin.ModelAdmin):
    inlines = [ImageDestinationInline]

admin.site.register(Destination, DestinationAdmin)

class ImageExperienceInline(admin.TabularInline):
    model = ImageExperience
    extra = 1

class ExperienceAdmin(admin.ModelAdmin):
    inlines = [ImageExperienceInline]

admin.site.register(Experience, ExperienceAdmin)


class ImageAccommodationInline(admin.TabularInline):
    model = ImageAccommodation
    extra = 1

class AccommodationAdmin(admin.ModelAdmin):
    inlines = [ImageAccommodationInline]

admin.site.register(Accommodation, AccommodationAdmin)