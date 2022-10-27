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
web3 = Web3(Web3.HTTPProvider(provider_rpc['alphanet']))  # Change to correct network

account_from = {
    'private_key':  private_key,
    'address': address,
}

print(f'Attempting to deploy from account: { account_from["address"] }')

MyToken = web3.eth.contract(abi=abi, bytecode=bytecode)

construct_txn = MyToken.constructor(8*pow(10, (18+6))).buildTransaction(
    {
        'from': account_from['address'],
        'nonce': web3.eth.getTransactionCount(account_from['address']),
    }
)

tx_create = web3.eth.account.signTransaction(construct_txn, account_from['private_key'])

tx_hash = web3.eth.sendRawTransaction(tx_create.rawTransaction)
tx_receipt = web3.eth.waitForTransactionReceipt(tx_hash)

print(f'Contract deployed at address: { tx_receipt.contractAddress }')



