from django.urls import path
from . import views

# urls.py
urlpatterns = [
    path('main/export_profiles/', views.ExportProfilesView.as_view()),
    path('main/settings/', views.SettingsView.as_view(), name='settings'),
]


