from django.db import models
from django.contrib.auth.models import User

# Create your models here.
	  # //django
	  # // votacion:
	  # //  estado: en proceso, aceptada
	  # //  nombre: 
	  # //  puntos:
	  # //  puntos_free:
	  # //  user_account_funds:

	  # // voto:
	  # // user_account:
	  # // votacion:
class Voting(models.Model):
	status = models.BooleanField(default=False)#0 in process, 1 aceppted
	name = models.CharField(max_length=149)
	description = models.TextField( unique=True)
	points = models.IntegerField(blank=True, default=0)
	points_free = models.IntegerField(blank=True, default=0)
	user_account_funds = models.CharField(max_length=149,blank=True)


	def __str__(self):
		return self.name


class Vote(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	voting = models.ForeignKey(Voting, related_name='votation_user', on_delete=models.CASCADE, default=1)
	vote=models.BooleanField(default=False)#0 No, 1 Yes


	def __str__(self):
		return self.user+"-"+str(self.voting)+"-"+str(self.vote)
 