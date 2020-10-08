import random
from django.conf import settings
from django.db import models

User = settings.AUTH_USER_MODEL


class Tweet(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()

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
        return str(self.id)
