from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

app_name = 'student'

urlpatterns = [
	path('api/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
	path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
	path('api/profile/', views.get_student_profile, name='get_student_profile'),
	path('api/register/', views.register_student, name='register_student'),
]
