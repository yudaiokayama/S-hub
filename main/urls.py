from django.urls import path
from . import views

urlpatterns = [
    path('path/to/view/', views.my_view, name='my_view_name'),
]
