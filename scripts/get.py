from compile import abi, bytecode
from web3 import Web3
from decouple import config

private_key = config('secret')
address = config('address')
contract = config('contract')


provider_rpc = {
    'development': 'http://localhost:9933',
    'alphanet': 'https://rpc.api.moonbase.moonbeam.network',
}
web3 = Web3(Web3.HTTPProvider(provider_rpc["alphanet"]))  # Change to correct network

contract_address = contract

address= address

print(f'Making a call to contract at address: { contract_address }')

Incrementer = web3.eth.contract(address=contract_address, abi=abi)
number = Incrementer.functions.balanceOf(address).call()


# int(1*pow(10, (18))

# balanceOf

print(f'The current number stored is: { number } ')

# number = Incrementer.functions._mint(address,int(1*pow(10, (18)))).call()

# print(f'The current number stored is: { number } ')
