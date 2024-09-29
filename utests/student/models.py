from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Student(models.Model):
	name = models.CharField(max_length=255)
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	classes = models.ManyToManyField('subject.Class', related_name='students', blank=True)

	def __str__(self):
		return self.name
