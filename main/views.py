# views.py
import os
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Profile
from collections import OrderedDict
import csv
from rest_framework.permissions import IsAuthenticated


# class ExportProfilesView(APIView):
#     def get(self, request, *args, **kwargs):
#         filename = 'profiles.csv'
#         fieldnames = ['username', 'bio']
#class ExportProfilesView(APIView):
#    def get(self, request, *args, **kwargs):
#        filename = request.query_params.get('filename', 'profiles.csv')
#        fields = request.query_params.get('fields', 'username,bio').split(',')
        
    #
    #
    #
        # ファイル存在チェックと開き方の処理(前と同じ)
        
        # with open(filename, 'a', newline='') as csvfile:
        #     writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            
        #     if not file_exists:
        #         writer.writeheader()
                
        #     for profile in Profile.objects.all():
        #         writer.writerow({
        #             'username': profile.username,
        #             'bio': profile.bio
        #         })
                
        # return Response({'message': 'Profiles exported successfully'})


class SettingsView(APIView):
    def post(self, request):
        user_id = request.data.get('user_id')
        profile_data = {k: v for k, v in request.data.items() if k != 'user_id'}
        filename = f'profiles_{user_id}.csv'
        fieldnames = profile_data.keys()

        # 既存のCSVデータを読み込む
        existing_data = []
        if os.path.isfile(filename):
            with open(filename, 'r') as csvfile:
                reader = csv.DictReader(csvfile)
                existing_data = list(reader)

        # 新しいデータを追加または上書き
        new_data = []
        for row in existing_data:
            key = row['profileName']
            if key == profile_data['profileName']:
                new_data.append(profile_data)
            else:
                new_data.append(row)

        # CSVファイルに書き込む
        with open(filename, 'w', newline='') as csvfile:
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            for row in new_data:
                writer.writerow(row)

        return Response({'message': 'Profile data saved'})

class ProfilesView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request, user_id):
        filename = f'profiles_{user_id}.csv'
        profiles = []

        try:
            with open(filename, 'r') as csvfile:
                reader = csv.DictReader(csvfile)
                for row in reader:
                    profiles.append(dict(row))
        except FileNotFoundError:
            pass  # ファイルが存在しない場合は空のリストを返す

        return JsonResponse(profiles, safe=False)

def get_network(request, user_id):
    if request.method == 'GET':
        csv_file = f'user_{user_id}.csv'
        csv_path = os.path.join('path/to/csv/folder', csv_file)
        
        if os.path.exists(csv_path):
            data = []
            with open(csv_path, 'r') as file:
                reader = csv.reader(file)
                for row in reader:
                    data.append(row)
            return JsonResponse({'csv_data': data})
        else:
            return JsonResponse({'error': 'CSV file not found'}, status=404)


