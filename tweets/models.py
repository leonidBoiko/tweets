import random
from django.conf import settings
from django.db import models

User = settings.AUTH_USER_MODEL


class TweetLike(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    tweet = models.ForeignKey("Tweet", on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'TweetLike'
        verbose_name_plural = 'TweetLikes'


class Tweet(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    likes = models.ManyToManyField(User, related_name="tweet_user", blank=True, through=TweetLike)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Tweet'
        verbose_name_plural = 'Tweets'
        ordering = ['-id']

    def serialize(self):
        return {
            "id": self.id,
            "content": self.content,
            "likes": random.randint(0, 200)
        }

    def __str__(self):
        return str(self.content)
