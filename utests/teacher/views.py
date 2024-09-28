from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework.permissions import IsAuthenticated

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
