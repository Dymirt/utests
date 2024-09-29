from django.db import models

# Create your models here.

class Subject(models.Model):
	name = models.CharField(max_length=255)
	code = models.CharField(max_length=10, unique=True, blank=True)
	teacher = models.ManyToManyField('teacher.Teacher', related_name='subjects', blank=True)

	def __str__(self):
		return self.name

class Class(models.Model):
	name = models.CharField(max_length=255)
	subjects = models.ManyToManyField(Subject, related_name='classes', blank=True)

	def __str__(self):
		return self.name
