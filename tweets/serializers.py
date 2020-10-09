from rest_framework import serializers
from django.conf import settings
from .models import Tweet


MAX_TWEET_LENGHT = settings.MAX_TWEET_LENGHT
TWEET_ACTION_OPTIONS = settings.TWEET_ACTION_OPTIONS


class TweetActionSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField()
    action = serializers.CharField()

    def validate_action(self, value):
        value = value.lower().strip() # " Like " --> "like"
        if not value in TWEET_ACTION_OPTIONS:
            raise serializers.ValidationError("This is not a valid action!")
        return value

class TweetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tweet
        fields = ["content"]

    def validate_content(self, value):
        if len(value) > MAX_TWEET_LENGHT:
            raise serializers.ValidationError("This tweet is to long")
        return value