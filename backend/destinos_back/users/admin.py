from django.contrib import admin

from .models import *
# Register your models here.

class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'first_name', 'last_name', 'dni', 'phone', 'photo', 'address', 'rol')
    list_filter = ('username', 'email', 'first_name', 'last_name', 'dni', 'phone', 'photo', 'address', 'rol')
    search_fields = ('username', 'email', 'first_name', 'last_name', 'dni', 'phone', 'photo', 'address', 'rol')
    ordering = ('username', 'email', 'first_name', 'last_name', 'dni', 'phone', 'photo', 'address', 'rol')

admin.site.register(User, UserAdmin)