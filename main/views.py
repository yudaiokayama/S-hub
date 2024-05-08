from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET', 'POST'])
def example_view(request):
    if request.method == 'GET':
        # GETリクエストの場合の処理
        data = {'message': 'This is a GET request'}
        return Response(data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        # POSTリクエストの場合の処理
        received_data = request.data  # POSTされたデータを取得
        # データを処理する他のコード...
        return Response({'message': 'Data received successfully'}, status=status.HTTP_201_CREATED)
