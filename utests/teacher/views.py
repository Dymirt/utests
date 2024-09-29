from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework.permissions import IsAuthenticated
from .serializers import TeacherRegistrationSerializer
from .models import Teacher
from rest_framework import status

@api_view(['GET'])
def get_teacher_profile(request):
    if request.user.is_authenticated:
        try:
            teacher = Teacher.objects.get(user=request.user)
            serializer = TeacherSerializer(teacher)
            return Response(serializer.data)
        except Teacher.DoesNotExist:
            return Response({"error": "Teacher profile not found"}, status=404)
    return Response({"error": "Not authenticated"}, status=401)

@api_view(['POST'])
def register_teacher(request):
    serializer = TeacherRegistrationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
