import csv
from django.contrib.auth.models import User

class CSVBackend(object):
    def authenticate(self, request, username=None, password=None):
        # CSVファイルからユーザー情報を読み込む
        with open('users.csv', newline='') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                if row['username'] == username and row['password'] == password:
                    # ユーザーが見つかった場合、Userオブジェクトを返す
                    return User.objects.get_or_create(username=username)[0]
        return None

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None
