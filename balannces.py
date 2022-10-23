from web3 import Web3
from compile import abi, bytecode
from decouple import config

private_key = config('secret')
address = config('address')
contract = config('contract')

provider_rpc = {
    "development": "http://localhost:9933",
    "alphanet": "https://rpc.api.moonbase.moonbeam.network",
}
web3 = Web3(Web3.HTTPProvider(provider_rpc["alphanet"]))  # Change to correct network

address_from =  address

# address_to = "ADDRESS-TO-HERE"

# balance_from = web3.fromWei(web3.eth.getBalance(address_from), "vota_token")
# balance_to = web3.fromWei(web3.eth.getBalance(address_to), "ether")

# print(f"The balance of { address_from } is: { balance_from } ETH")
# print(f"The balance of { address_to } is: { balance_to } ETH")


 # token = web3.eth.contract(address={token_address}, abi={token_abi}) # declaring the token contract
# token_balance = token.functions.balanceOf({address_from}).call()
# print(token_balance)