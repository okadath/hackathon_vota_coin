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
web3 = Web3(Web3.HTTPProvider(provider_rpc["development"]))  # Change to correct network

contract_address = contract

address= address

print(f'Making a call to contract at address: { contract_address }')

Incrementer = web3.eth.contract(address=contract_address, abi=abi)
number = Incrementer.functions.balanceOf(address).call()
# number = Incrementer.functions.adding_values("0xDEE7796E89C82C36BAdd1375076f39D69FafE253").call()



# int(1*pow(10, (18))

# balanceOf

print(f'The current number stored is: { number } ')

# number = Incrementer.functions._mint(address,int(1*pow(10, (18)))).call()

# print(f'The current number stored is: { number } ')
votes_list= Incrementer.functions.get_list_votes_result( ).call()
print("votes list="+str(votes_list))


vote_of_addres=Incrementer.functions.get_result_of_address(address).call()
print("votos para la direccion "+str(address)+" es ="+ str(vote_of_addres))






# increment_tx = Incrementer.functions.adding_values(address,"test name" ).buildTransaction(
#     {
#         'from': address,
#         'nonce': web3.eth.getTransactionCount(address),
#     }
# )

# tx_create = web3.eth.account.signTransaction(increment_tx, private_key)
# tx_hash = web3.eth.sendRawTransaction(tx_create.rawTransaction)
# tx_receipt = web3.eth.waitForTransactionReceipt(tx_hash)

# print(f'Tx successful with hash: { tx_receipt.transactionHash.hex() }')



# for i in range(0,20):
# increment_tx = Incrementer.functions.vote(address).buildTransaction(
#     {
#         'from': address,
#         'nonce': web3.eth.getTransactionCount(address),
#     }
# )

# tx_create = web3.eth.account.signTransaction(increment_tx, private_key)
# tx_hash = web3.eth.sendRawTransaction(tx_create.rawTransaction)
# tx_receipt = web3.eth.waitForTransactionReceipt(tx_hash)

# print(f'Tx successful with hash: { tx_receipt.transactionHash.hex() }')


vote_of_addres=Incrementer.functions.get_result_of_address(address).call()
print("votos para la direccion "+str(address)+" es ="+ str(vote_of_addres))
