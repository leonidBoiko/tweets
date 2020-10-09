from rest_framework import serializers
from django.conf import settings
from .models import Tweet, TweetLike


MAX_TWEET_LENGHT = settings.MAX_TWEET_LENGHT
TWEET_ACTION_OPTIONS = settings.TWEET_ACTION_OPTIONS


class TweetActionSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField()
    action = serializers.CharField()

    class Meta:
        model = TweetLike
        fields = ["id", "action"]

    def validate_action(self, value):
        value = value.lower().strip() # " Like " --> "like"
        if not value in TWEET_ACTION_OPTIONS:
            raise serializers.ValidationError("This is not a valid action!")
        return value


class TweetSerializer(serializers.ModelSerializer):
    likes = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Tweet
        fields = ["id", "content", "likes"]

    def get_likes(self, obj):
        return obj.likes.count()

    def validate_content(self, value):
        if len(value) > MAX_TWEET_LENGHT:
            raise serializers.ValidationError("This tweet is to long")
        return value