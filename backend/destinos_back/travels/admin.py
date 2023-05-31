from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(Province)
admin.site.register(City)
admin.site.register(Address)
admin.site.register(ImageDestination)
admin.site.register(Experience)
admin.site.register(Package)
admin.site.register(Payment)
admin.site.register(Order)
admin.site.register(Client)
admin.site.register(Accommodation)
admin.site.register(FeatureService)

class ImageDestinationInline(admin.StackedInline):
    model = ImageDestination
    extra = 1


class DestinationAdmin(admin.ModelAdmin):
    inlines = [ImageDestinationInline]

admin.site.register(Destination, DestinationAdmin)


