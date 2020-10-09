from rest_framework import serializers
from django.conf import settings
from .models import Tweet


MAX_TWEET_LENGHT = settings.MAX_TWEET_LENGHT


class TweetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tweet
        fields = ["content"]

    def validate_content(self, value):
        if len(value) > MAX_TWEET_LENGHT:
            raise serializers.ValidationError("This tweet is to long")
        return value