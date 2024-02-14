from django.urls import path
from . import views

urlpatterns=[
	path('jobs',views.JobsView.as_view(),name="jobs")
]