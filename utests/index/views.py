from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

def index(request):
	return render(request, 'index/index.html')

@api_view(['GET'])
def get_data(request):
    data = {
        "message": "Hello from Django!"
    }
    return Response(data)
