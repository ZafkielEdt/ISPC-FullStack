from django import forms
from .models import ImageDestination

class ImageDestinationForm(forms.ModelForm):
    class Meta:
        model = ImageDestination
        fields = ['url', 'title']