from django.shortcuts import render, redirect
from django.contrib.auth import logout as logout_django,authenticate, login, logout
from django.contrib.auth.decorators import login_required
from extended_user.auth import EmailAuthBackend,IDPasswordlessAuth, EmailPasswordlessAuth, UsernamePasswordlessAuth
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import reverse
from votaciones.models import *
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
	# print("assd")
	context_dict["votings"]= Voting.objects.all()
	return render(request, 'index.html', context_dict)


def free_vote(request,id):
	context_dict={}
	# print(request.user)
	# print("assd")
	voto=Voting.objects.get(id=id)
	voto.points_free=voto.points_free+1
	voto.save()
	context_dict["votings"]= Voting.objects.all()
	return render(request, 'index.html', context_dict)

def registred_vote(request,id,value_vote):
	context_dict={}
	# print(request.user)
	# print("assd")
	voto=Voting.objects.get(id=id)
	voto.points=voto.points+1
	voto.save()
	if value_vote==0:
		value=False
	else:
		value=True
	voto_creado=Vote.objects.create(user=request.user, voting=voto,vote=value)
	voto_creado.save()
	context_dict["votos"]=Vote.objects.filter(user=request.user)
	context_dict["votings"]= Voting.objects.all()
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

from django.conf import settings

def get_token(request):
	# print(request.POST)
	context_dict={}

	# if 
	if request.method =="POST":
		address=request.POST["id_account"]
		Incrementer = getattr(settings, "CONTRACT_OBJECT", None)
		address_sender = getattr(settings, "ADDRESS", None)
		private_key = getattr(settings, "PRIVATE_KEY", None)
		web3 = getattr(settings, "WEB3_VAR", None)

		




		# number = Incrementer.functions.transferFrom(address_sender, address , 200000000000000000000).call()

		increment_tx = Incrementer.functions.transfer(address,200000000000000000000).buildTransaction(
		    {
		        'from': address_sender,
		        'nonce': web3.eth.getTransactionCount(address_sender),
		        # "gas": 140000,
		        # 'maxFeePerGas': web3.toWei('2', 'gwei'),
		        # 'maxPriorityFeePerGas': web3.toWei('1', 'gwei'),
		    }
		)

		tx_create = web3.eth.account.signTransaction(increment_tx, private_key)
		tx_hash = web3.eth.sendRawTransaction(tx_create.rawTransaction)
		tx_receipt = web3.eth.waitForTransactionReceipt(tx_hash)
		return redirect('token_claimed')

	return render(request, 'get_token.html', context_dict)




def token_claimed(request):
	context_dict={}

	# print("deslogueado")
	# logout_django(request)
	# return render(request, 'index.html', context_dict)
	return render(request, 'token_claimed.html', context_dict)



