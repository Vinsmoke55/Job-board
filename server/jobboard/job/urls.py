from django.urls import path
from . import views
from django.urls import include
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register('user',views.User,basename='user')
router.register('job_posting',views.JobPostingView,basename='job')
router.register('job_application',views.JobApplicationView,basename='application')

urlpatterns=[
	path('',include(router.urls)),
]