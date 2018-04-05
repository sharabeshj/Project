from rest_framework import serializers
from api.models import Profile


class ProfileSerializer(serializers.ModelSerializer):
	user = serializers.ReadOnlyField(source = 'user.username')

	class Meta:
		model = Profile
		fields = ('user','name','about')