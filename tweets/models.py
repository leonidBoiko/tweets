import random
from django.db import models

class Tweet(models.Model):
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

