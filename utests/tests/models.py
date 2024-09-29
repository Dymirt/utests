from django.db import models

# Create your models here.

class Test(models.Model):
	name = models.CharField(max_length=255)
	subject = models.ForeignKey('subject.Subject', on_delete=models.CASCADE, related_name='tests')

	def __str__(self):
		return self.name

class TestAtempt(models.Model):
	test = models.ForeignKey(Test, on_delete=models.CASCADE, related_name='attempts')
	student = models.ForeignKey('student.Student', on_delete=models.CASCADE, related_name='attempts')
	score = models.FloatField()
	date = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return f'{self.student} - {self.test}'
