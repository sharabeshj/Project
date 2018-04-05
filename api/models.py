from django.db import models

# Create your models here.

class Profile(models.Model):
	user = models.ForeignKey('auth.user',related_name = 'profile',on_delete = models.CASCADE)
	name = models.CharField(max_length = 50)
	about = models.TextField()

