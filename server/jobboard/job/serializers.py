from rest_framework import serializers
from . import models

class UserSerializer(serializers.ModelSerializer):
	"""a serializer for our user profile object"""

	class Meta:
		model=models.UserProfile
		fields=('id','email','name','skill','job_interest')

class JobPostingSerializer(serializers.ModelSerializer):

	class Meta:
		model=models.JobPosting
		fields=('company_logo','job_title','company_name','location','job_description','salary_range','required_skill')

class JobApplicationSerializer(serializers.ModelSerializer):

	class Meta:
		model=models.JobApplicaton
		fields=('job_title','letter','user_resume')