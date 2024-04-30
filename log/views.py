from django.shortcuts import render

from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect

def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')  # ログイン後にリダイレクトするURL名を指定します
        else:
            # ログイン失敗時の処理を記述します
            pass
    return render(request, 'login.html')

def logout_view(request):
    logout(request)
    return redirect('login')  # ログアウト後にリダイレクトするURL名を指定します

