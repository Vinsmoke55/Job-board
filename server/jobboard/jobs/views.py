from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .models import Job
from .serializers import JobSerializer

# Create your views here.
class JobsView(APIView):
	def get(self,request):
		jobs=Job.objects.all()
		serializer=JobSerializer(jobs,many=True)
		return Response(serializer.data, status=status.HTTP_200_OK)

