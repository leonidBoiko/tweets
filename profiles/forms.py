from django import forms
from .models import Profile
from django.contrib.auth import get_user_model

User = get_user_model()


class ProfileForm(forms.ModelForm):
    first_name = forms.CharField(required=False)
    last_name = forms.CharField(required=False)
    email_address = forms.CharField(required=False)

    class Meta:
        """Meta definition for Profileform."""

        model = Profile
        fields = ('location', 'bio')


class UserProfileForm(forms.ModelForm):
    location = forms.CharField(required=False)
    bio = forms.CharField(required=False)

    class Meta:
        """Meta definition for Profileform."""

        model = User
        fields = ('first_name', 'last_name', 'email')
