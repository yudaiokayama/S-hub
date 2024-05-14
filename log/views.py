# views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from .auth import get_users_from_csv

class LoginView(APIView):
    def post(self, request):
        phone = request.data.get('phone')
        password = request.data.get('password')

        users = get_users_from_csv('users.csv')
        try:
            user = next(u for u in users if u['phone'] == phone and u['password'] == password)
            refresh = RefreshToken.for_user(User(username=user['phone']))
            
            # セッションにリフレッシュトークンを設定
            request.session['refresh_token'] = str(refresh)
            
            return Response({
                'username': user['phone'],
                'access_token': str(refresh.access_token)
            })
        except:
            return Response({'error': 'Invalid credentials'}, status=400)

