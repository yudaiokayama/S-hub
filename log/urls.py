# accounts/urls.py

from django.urls import path
from .views import LoginView, RegisterView

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('login/', RegisterView.as_view(), name='Register'),
]
