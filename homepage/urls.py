from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^product/\d+/$',views.detail),
]
