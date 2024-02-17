from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .models import Job
from .serializers import JobSerializer
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

class RegistrationView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            return Response({'error': 'Both username and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(username=username).exists():
            return Response({'error': 'Username is already taken.'}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(username=username, password=password)

        return Response({'message': "created sucessfully"}, status=status.HTTP_201_CREATED)

class LoginView(APIView):
    # permission_classes=[IsAuthenticated]
    # def get(self,request):
    #     # if request.user.is_authenticated:
    #     #     user_info = {
    #     #         'username': request.user.username,
    #     #         'email': request.user.email,
    #     #     }
    #     #     return Response(user_info)
    #     # else:
    #     #     return Response({'error': 'User not authenticated'})
    #     user_info = {
    #             'username': request.user.username,
    #             'email': request.user.email,
    #         }
    #         return Response(user_info)
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            return Response({'error': 'Both username and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return Response({"username":user.username,"password":user.password})
        else:
            return Response({'message': "Login failed"}, status=status.HTTP_400_BAD_REQUEST)




    

# Create your views here.
class JobsView(APIView):
	def get(self,request):
		jobs=Job.objects.all()
		serializer=JobSerializer(jobs,many=True)
		return Response(serializer.data, status=status.HTTP_200_OK)

class CreateJobView(APIView):
    def post(self,request):
        title = request.data.get('title')
        company =request.data.get('company')
        location = request.data.get('location')
        description = request.data.get('description')
        requirements = request.data.get('requirements')
        Job.objects.create(title=title,company=company,location=location,description=description,requirements=requirements)
        return Response({'message': "created sucessfully"}, status=status.HTTP_201_CREATED)


