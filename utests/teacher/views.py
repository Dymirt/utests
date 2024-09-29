from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework.permissions import IsAuthenticated
from .serializers import TeacherRegistrationSerializer, TeacherSerializer
from .models import Teacher
from rest_framework import status
from django.contrib.auth.models import User

@api_view(['GET'])
def get_teacher_profile(request):
    print("Request user:", request.user)  # Add logging here
    if request.user.is_authenticated:
        try:
            teacher = Teacher.objects.get(user=request.user)
            serializer = TeacherSerializer(teacher)
            return Response(serializer.data)
        except Teacher.DoesNotExist:
            return Response({"error": "Teacher profile not found"}, status=status.HTTP_404_NOT_FOUND)
    return Response({"error": "Not authenticated"}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
def register_teacher(request):
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')

    if not username or not email or not password:
        return Response({'success': False, 'message': 'All fields are required'}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(username=username).exists():
        return Response({'success': False, 'message': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(email=email).exists():
        return Response({'success': False, 'message': 'Email already exists'}, status=status.HTTP_400_BAD_REQUEST)

    user = User.objects.create_user(username=username, email=email, password=password)
    teacher = Teacher.objects.create(user=user, email=email)

    return Response({'success': True, 'message': 'Registration successful', 'username': username, 'email': email}, status=status.HTTP_201_CREATED)
