const { ethers } = require("ethers");


// const ethers = require('ethers');
console.log("asdas1")

// 2. Define network configurations
const providerRPC = {
  moonbase: {
    name: 'moonbase-alpha',
    rpc: 'https://rpc.api.moonbase.moonbeam.network',
    chainId: 1287, // 0x507 in hex,
  },
};



// 3. Create ethers provider
const provider = new ethers.providers.StaticJsonRpcProvider(
  providerRPC.moonbase.rpc, 
  {
    chainId: providerRPC.moonbase.chainId,
    name: providerRPC.moonbase.name,
  }
);



const contractAddress = "0x23c2060D32CD4f5B958b4d3D4d66B5C808312298";
const abi = [
  {"inputs":[{"internalType":"uint256","name":"initialSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},
  {"indexed":true,"internalType":"address","name":"spender","type":"address"},
  {"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"val","type":"uint256"}],"name":"DataStored","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},
  {"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},
  {"indexed":true,"internalType":"address","name":"to","type":"address"},
  {"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},
  {"inputs":[{"internalType":"address","name":"a","type":"address"},
  {"internalType":"string","name":"name","type":"string"}],"name":"adding_values","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"address","name":"owner","type":"address"},
  {"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"spender","type":"address"},
  {"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"spender","type":"address"},
  {"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[],"name":"get_list_votes_result","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"a","type":"address"}],"name":"get_result_of_address","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"spender","type":"address"},
  {"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"mint_num","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"recipient","type":"address"},
  {"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"address","name":"sender","type":"address"},
  {"internalType":"address","name":"recipient","type":"address"},
  {"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"address","name":"propose","type":"address"},
  {"internalType":"address","name":"a","type":"address"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"}];




// const provider = new ethers.providers.Web3Provider(window.ethereum);
// await provider.send('eth_requestAccounts', []); // <- this promps user to connect metamask
const signer = provider.getSigner(contractAddress);
  // provider = new ethers.providers.Web3Provider(window.ethereum);
// const  signerAddress = await signer.getAddress();
const contract = new ethers.Contract(contractAddress, abi, signer);


console.log("asdas2")




async function send_initial_value() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await contract.mint("100000000000000000000");

    } catch (error) {
      console.log(error);
    }
  } else {
    document.getElementById("executeButton").innerHTML =
      "Please install MetaMask";
  }
}

const showAccount = document.querySelector('.showAccount');

async function get_balance() {
  if (typeof window.ethereum !== "undefined") {
    try {
          const accounts = await ethereum.request({ method: "eth_accounts" });
          const balance = ethers.utils.formatEther(await contract.balanceOf(accounts[0]));
  showAccount.innerHTML = balance;

      console.log(balance);

    } catch (error) {
      console.log(error);
    }
  } else {
    document.getElementById("executeButton").innerHTML =
      "Please install MetaMask";
  }
}



async function s() {

    const accounts = await ethereum.request({ method: "eth_accounts" });
  const balanceFrom = ethers.utils.formatEther(await provider.getBalance(accounts[0]));
  // const balanceTo = ethers.utils.formatEther(await provider.getBalance(addressTo));
console.log("asdassssws")
  console.log(`The balance of ${accounts[0]} is: ${balanceFrom} ETH`);

}



async function connect() {
  if (typeof window.ethereum !== "undefined") {
    const chainId = 1287 

    if (window.ethereum.networkVersion !== chainId) {
          try {
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: "0x507" }]
            });
                        console.log("conectedd")

          } catch (err) {
          //   console.log("error")
          //   console.log(err)
          //   console.log(err.code)
              // This error code indicates that the chain has not been added to MetaMask
            if (err.code === 4902) {
                          // console.log("error 4902")

              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    chainName: "Moonbase Alpha",
                    chainId: "0x507",
                    nativeCurrency: {
                      name: 'DEV',
                      symbol: 'DEV',
                      decimals: 18
                  },

                    rpcUrls: ["https://rpc.api.moonbase.moonbeam.network"],
                    blockExplorerUrls: ["https://moonbase.moonscan.io/"]
                  }
                ]

              });
            }
            
          }
        }



    document.getElementById("connectButton").innerHTML = "Connected";
    const accounts = await ethereum.request({ method: "eth_accounts" });
    console.log(accounts);
    // console.log("asdasd")
  } else {
    document.getElementById("connectButton").innerHTML =
      "Please install MetaMask";
  }





}





// balances();

async function test_func(address_votation) {
// var result = await contract.get_list_votes_result();


const transaction = await contract.vote(address_votation,{gasLimit: ethers.utils.parseEther("0.0001")});

const transactionReceipt = await transaction.wait();
console.log(transaction);

// if (transactionReceipt.status !== 1) {
//    alert('error message');
//    return;
// }

console.log(result);
return result;
}

module.exports = {
  s,
  connect,
  // execute,
  get_balance,
  // test_func,
  // votation_list,
};

