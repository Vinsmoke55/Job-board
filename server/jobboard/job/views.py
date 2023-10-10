from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from . import models
from . import serializers

# Create your views here.
class User(viewsets.ModelViewSet):
	queryset=models.UserProfile.objects.all()
	serializer_class=serializers.UserSerializer

class JobPostingView(viewsets.ModelViewSet):
	queryset=models.JobPosting.objects.all()
	serializer_class=serializers.JobPostingSerializer

		
class JobApplicationView(viewsets.ModelViewSet):
	queryset=models.JobApplicaton.objects.all()
	serializer_class=serializers.JobApplicationSerializer