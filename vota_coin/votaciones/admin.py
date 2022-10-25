from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import *
# from django.contrib.auth.models import User
# from django.contrib.auth.admin import UserAdmin as BaseAdmin
from import_export.admin import ImportExportModelAdmin
from import_export import resources
# from django.contrib.sessions.models import Session

 
 
# admin.site.register(Profile)
 

@admin.register(Voting)
class VotingAdmin(ImportExportModelAdmin):
	pass
    # search_fields = ('id_user',"user__username")

@admin.register(Vote)
class VoteAdmin(ImportExportModelAdmin):
	pass