from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Teacher
from subject.models import Subject

class TeacherRegistrationSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username')
    password = serializers.CharField(write_only=True, source='user.password')

    class Meta:
        model = Teacher
        fields = ['username', 'password', 'email']

    def validate_username(self, value):
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("A user with that username already exists.")
        return value

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = User.objects.create_user(**user_data)
        teacher = Teacher.objects.create(user=user, **validated_data)
        return teacher

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email']

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ['name', 'code']

class TeacherSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    subjects = SubjectSerializer(many=True)

    class Meta:
        model = Teacher
        fields = ['user', 'email', 'subjects']
