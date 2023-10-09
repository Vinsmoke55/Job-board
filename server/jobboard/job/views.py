from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from . import models
from . import serializers

# Create your views here.
class User(viewsets.ViewSet):

	serializer_class=serializers.UserSerializer
	def list(self,request):
		queryset=models.UserProfile.objects.all()[0]
		return Response({'message':queryset})
		

