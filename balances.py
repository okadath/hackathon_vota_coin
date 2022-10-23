from web3 import Web3
from decouple import config

private_key = config('secret')
address = config('address')
contract = config('contract')

provider_rpc = {
    "development": "http://localhost:9933",
    "alphanet": "https://rpc.api.moonbase.moonbeam.network",
}
web3 = Web3(Web3.HTTPProvider(provider_rpc["alphanet"]))  # Change to correct network

 
address_from = address

balance_from = web3.fromWei(web3.eth.getBalance(address_from), "ether")
# balance_to = web3.fromWei(web3.eth.getBalance(address_to), "ether")

print(f"The balance of { address_from } is: { balance_from } ETH")
# print(f"The balance of { address_to } is: { balance_to } ETH")