"""vota_coin URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path , include  
from django.conf import settings
from django.conf.urls.static import static
from extended_user.views import *
from vota_coin.views import *

from .views import *    
from django.contrib.auth.views import PasswordResetView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('votaciones/', include("votaciones.urls")), 
    path("login/", login_func, name='login_func'),
    path("", home, name='home'),
    path("vota_free/<int:id>", free_vote, name='free_vote'),
    path("registred_vote/<int:id>/<int:value_vote>", registred_vote, name='registred_vote'),


    path('logout/', logout, name='logout'),
    path("votacoin", votacoin, name='votacoin'),
    path("get_token", get_token, name='get_token'),
    path("token_claimed", token_claimed, name='token_claimed'),
    path("get_votations/<str:address>", get_votations, name='get_votations'),
    path("vote", vote, name='vote'),
    path("create_votation", create_votation, name='create_votation'),

]

urlpatterns = urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

 