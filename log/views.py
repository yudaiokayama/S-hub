# views.py
import csv
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from .auth import get_users_from_csv
from django.contrib.auth.hashers import make_password, check_password

class LoginView(APIView):
    def post(self, request):
        phone = request.data.get('phone')
        password = request.data.get('password')

        users = get_users_from_csv('users.csv')
        try:
            user = next((u for u in users if u['phone'] == phone), None)
            if user:
                # パスワードの検証
                hashed_password = user['password']
                if check_password(password, hashed_password):
                    refresh = RefreshToken.for_user(User(username=user['phone']))
                    
                    # セッションにリフレッシュトークンを設定
                    request.session['refresh_token'] = str(refresh)
                    
                    return Response({
                        'username': user['phone'],
                        'access_token': str(refresh.access_token)
                    })
                else:
                    return Response({'error': 'Invalid password'}, status=400)
            else:
                return Response({'error': 'Invalid phone number'}, status=400)
        except Exception as e:
            return Response({'error': str(e)}, status=400)


class RegisterView(APIView):
    def post(self, request):
        user_data = request.data
        user_id = user_data.get('user_id')
        password = user_data.get('password')
        
        # users.csvを読み込む
        with open('users.csv', 'r') as csvfile:
            reader = csv.DictReader(csvfile)
            users = list(reader)
            
        # user_idが存在するかチェック
        existing_user = next((u for u in users if u['user_id'] == user_id), None)
        
        if existing_user:
            return Response({'error': 'User already exists'}, status=400)
        
        # パスワードをハッシュ化
        hashed_password = make_password(password)
        
        # 新規ユーザーの場合、users.csvに追加
        fieldnames = users[0].keys()
        user_data['password'] = hashed_password
        with open('users.csv', 'a', newline='') as csvfile:
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writerow(user_data)
            
        return Response({'message': 'User registered successfully'})



