from rest_framework import serializers
from . import models

class UserSerializer(serializers.ModelSerializer):
	"""a serializer for our user profile object"""

	class Meta:
		model=models.UserProfile
		fields=('email','name','skill','job_interest')