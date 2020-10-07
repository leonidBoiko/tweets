from django.db import models


class Tweet(models.Model):
    content = models.TextField()

    class Meta:
        verbose_name = 'Tweet'
        verbose_name_plural = 'Tweets'

    def __str__(self):
        return str(self.id)

