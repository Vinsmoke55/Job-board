from django.urls import path
from . import views
from django.urls import include
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register('user',views.User,basename='user')

urlpatterns=[
	path('',include(router.urls)),
]