from django.shortcuts import render
from api.models import Profile
from api.serializers import ProfileSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import login as auth_login,authenticate
from django.http import JsonResponse,HttpResponse
from api.permissions import IsOwnerOrReadOnly
from rest_framework import permissions
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
@csrf_exempt
def login(request):
	if request.method == "POST":
		username = request.POST.get('username')
		password = request.POST.get('password')
		user = authenticate(username = username, password = password)
		if user is not None:
			if user.is_active:
				auth_login(request.user)
				return HttpResponse("ok")
		else:
			return HttpResponse("not ok")		


class ProfileList(APIView):
	permission_classes = (permissions.IsAuthenticatedOrReadOnly,
							IsOwnerOrReadOnly,)
	def get(self,request,format = None):
		profile = Profile.objects.all()
		serializer = ProfileSerializer(profile,many = True)
		return Response(serializer.data)

	def post(self,request,format = None):
		serializer = ProfileSerializer(data = request.data)
		if serializer.is_valid():
			serializer.save(user = self.request.user)
			return Response(serializer.data,status = status.HTTP_201_CREATED)
		return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST)


class ProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer	