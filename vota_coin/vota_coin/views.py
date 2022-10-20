from django.shortcuts import render, redirect
from django.contrib.auth import logout as logout_django,authenticate, login, logout
from django.contrib.auth.decorators import login_required
from extended_user.auth import EmailAuthBackend,IDPasswordlessAuth, EmailPasswordlessAuth, UsernamePasswordlessAuth
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import reverse

# Create your views here.
# def login(request):
#     context_dict={}
#     print(request.user)
#     return render(request, 'index.html', context_dict)




def login_func(request):
	# print(request.POST)
	context_dict={}
	if request.user.is_authenticated:
		return HttpResponseRedirect(reverse('home'))

	if request.method == 'POST':
		try:
			# print(request.POST['id_user'] )
		# try:
			user = EmailAuthBackend.authenticate(
				username=request.POST['id_email'],
				password=request.POST['id_password']
			)
		except Exception as e: 
			context_dict["error_messages"]="no se pudo loguear, contactar soporte tecnico y brinde id de usuario y demas datos"
			
			print(context_dict["error_messages"])
			return HttpResponseRedirect(reverse('login'))

		if user:
			if user.is_active:
				login(request, user, backend='django.contrib.auth.backends.ModelBackend')
				return HttpResponseRedirect(reverse('home'))
			# elif user.profile.is_producer or user.profile.is_director:
			#     login(request, user, backend='django.contrib.auth.backends.ModelBackend')
			#     return HttpResponseRedirect(reverse('eng_partner_home'))
			else:
				context_dict["error_messages"]="cuenta inactiva, contacte soporte tecnico"
				return render(request, 'index.html',  context_dict)
		else:
			context_dict["error_messages"]="los datos proporcionados son incorrectos"
			return render(request, 'index.html',  context_dict)
	else:
		if request.user.is_anonymous == True:
			return render(request, 'index.html', context_dict)
		else:
			# return render(request, 'index.html', context_dict)
			# return redirect('eng_home')
			return HttpResponseRedirect(reverse('home'))


@login_required(login_url="/")
def votacoin(request):
	context_dict={}
	print(request.user)
	return render(request, 'votacoin.html', context_dict)

# @login_required(login_url="/")
def home(request):
	context_dict={}
	print(request.user)
	return render(request, 'index.html', context_dict)

# @login_required(login_url="/")
# def recompensas(request):
#     context_dict={}
#     print(request.user)
#     return render(request, 'recompensas.html', context_dict)

# @login_required(login_url="/")
# def registra_venta(request):
#     pass

def logout(request):
	context_dict={}

	# print("deslogueado")
	logout_django(request)
	# return render(request, 'index.html', context_dict)
	return redirect('home')