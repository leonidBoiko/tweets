import random
from django.http import JsonResponse
from django.shortcuts import Http404, HttpResponse, render

from .models import Tweet


def home_view(request, *args, **kwargs):
    return render(request, 'pages/home.html')


def tweet_list_view(request, *args, **kwargs):
    qs = Tweet.objects.all()
    tweets_list = [{"id": x.id, "content": x.content, "likes": random.randint(0, 122)} for x in qs]
    data = {
        "response": tweets_list
    }
    return JsonResponse(data)


def tweet_detail_view(request, tweet_id, *args, **kwargs):

    data = {
        "id": tweet_id,
    }
    status = 200
    try:
        obj = Tweet.objects.get(id=tweet_id)
        data['content'] = obj.content
        data
    except:
        data['message'] = "Not found"
        status = 404
    return JsonResponse(data, status=status)