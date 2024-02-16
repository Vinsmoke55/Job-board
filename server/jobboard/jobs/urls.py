from django.urls import path
from . import views

urlpatterns=[
	path('jobs',views.JobsView.as_view(),name="jobs"),
	path('register',views.RegistrationView.as_view(),name="register"),
	path('login',views.LoginView.as_view(),name="login"),
	path('create',views.CreateJobView.as_view(),name="create")
]