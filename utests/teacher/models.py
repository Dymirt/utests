from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Teacher(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	name = models.CharField(max_length=255)
	subjects = models.ManyToManyField('subject.Subject', related_name='teachers', blank=True)

	def __str__(self):
		return self.name
