from django.urls import path
from . import views


urlpatterns = [
    path('<str:user_id>/profiles/', views.ProfilesView.as_view(), name='profiles'),
    # 他のURLパターンも追加
    #path('<str:user_id>/export_profiles/', views.ExportProfilesView.as_view()),
    path('<str:user_id>/settings/', views.SettingsView.as_view(), name='settings'),
]


