from django.urls import path
from . import views

# urls.py
urlpatterns = [
    path('export_profiles/', views.ExportProfilesView.as_view()),
    path('settings/', views.SettingsView.as_view(), name='settings'),
]


