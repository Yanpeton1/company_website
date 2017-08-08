from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponse


def detail(request):
    return HttpResponseRedirect('static/muban.html')
