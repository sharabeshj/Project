from django.conf.urls import url 
from api import views

urlpatterns = [
	url(r'^profile/$',views.ProfileList.as_view(),name = 'profile-list'),
	url(r'^profile/(?P<pk>[0-9]+)/$',views.ProfileDetail.as_view(),name = 'profile-detail'),
	url(r'^login/$',views.login,name = 'login')
	]
