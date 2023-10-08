from django.db import models

# Create your models here.
class UserProfile(models.Model):
	name=models.CharField(max_length=255)
	email=models.EmailField()
	skill=models.TextField()
	resume=models.FileField(upload_to='resume/')
	job_interest=models.TextField()

	def __str__(self):
		return self.email

class JobPosting(models.Model):
	company_logo=models.ImageField()
	job_title=models.CharField(max_length=255)
	company_name=models.CharField(max_length=255)
	location=models.CharField(max_length=255)
	job_description=models.TextField()
	salary_range=models.CharField(max_length=255)
	required_skill=models.TextField()

	def __str__(self):
		return self.job_title


class JobApplicaton(models.Model):
	job_title=models.CharField(max_length=255)
	letter=models.TextField()
	user_resume=models.FileField(upload_to='resume/')

	def __str__(self):
		return self.job_title

