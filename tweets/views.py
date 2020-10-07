from django.http import JsonResponse
from django.shortcuts import Http404, HttpResponse, render

from .models import Tweet


def home_view(request, *args, **kwargs):
    return HttpResponse('<h1>Hello word!!</h1>')


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