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


console.log("asdas2")

async function execute() {
  if (typeof window.ethereum !== "undefined") {
    contractAddress = "0x89CeB903B36f6028dbF71B4cFa05DCCcb10fB2c6";
    const abi = [
      {"inputs":[{"internalType":"uint256","name":"initialSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{
      "anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{
      "indexed":true,"internalType":"address","name":"spender","type":"address"},{
      "indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{
      "anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{
      "indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{
      "anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{
      "indexed":true,"internalType":"address","name":"to","type":"address"},{
      "indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{
      "inputs":[{"internalType":"address","name":"owner","type":"address"},{
      "internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{
      "inputs":[{"internalType":"address","name":"spender","type":"address"},{
      "internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{
      "inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{
      "inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{
      "inputs":[{"internalType":"address","name":"spender","type":"address"},{
      "internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{
      "inputs":[{"internalType":"address","name":"spender","type":"address"},{
      "internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{
      "inputs":[{"internalType":"uint256","name":"mint_num","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{
      "inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{
      "inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{
      "inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{
      "inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{
      "inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{
      "inputs":[{"internalType":"address","name":"recipient","type":"address"},{
      "internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{
      "inputs":[{"internalType":"address","name":"sender","type":"address"},{
      "internalType":"address","name":"recipient","type":"address"},{
      "internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{
      "inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}
      ];
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // await provider.send('eth_requestAccounts', []); // <- this promps user to connect metamask
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      await contract.mint("70000000000000000000");
    } catch (error) {
      console.log(error);
    }
  } else {
    document.getElementById("executeButton").innerHTML =
      "Please install MetaMask";
  }
}



// let wallet = new ethers.Wallet(account_from.privateKey, provider);
// console.log("asdas3")
// const send = async () => {
//   console.log(`Attempting to send transaction from ${wallet.address} to ${addressTo}`);

//   const tx = {
//     to: addressTo,
//     value: ethers.utils.parseEther('1'),
//   };

//   const createReceipt = await wallet.sendTransaction(tx);
//   await createReceipt.wait();
//   console.log(`Transaction successful with hash: ${createReceipt.hash}`);
// };

// send();
// const send = async () => {
async function s() {

    const accounts = await ethereum.request({ method: "eth_accounts" });
  const balanceFrom = ethers.utils.formatEther(await provider.getBalance(accounts[0]));
  // const balanceTo = ethers.utils.formatEther(await provider.getBalance(addressTo));
console.log("asdassssws")
  console.log(`The balance of ${accounts[0]} is: ${balanceFrom} ETH`);

}

async function s2() {
 

// const account_from = {
//   privateKey: 'YOUR-PRIVATE-KEY-HERE',
// };
// const contractAddress = 'CONTRACT-ADDRESS-HERE';
// const _value = 3;

// let wallet = new ethers.Wallet(account_from.privateKey, provider);

// const incrementer = new ethers.Contract(contractAddress, abi, wallet);
// const increment = async () => {
//   console.log(
//     `Calling the increment by ${_value} function in contract at address: ${contractAddress}`
//   );

//   const createReceipt = await incrementer.increment([_value]);
//   await createReceipt.wait();

//   console.log(`Tx successful with hash: ${createReceipt.hash}`);
// };

// // const tx = signer.sendTransaction({
// //     to: "ricmoo.firefly.eth",
// //     value: ethers.utils.parseEther("1.0")
// // });



// increment();

}



async function connect() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.log(error);
    }
    document.getElementById("connectButton").innerHTML = "Connected";
    const accounts = await ethereum.request({ method: "eth_accounts" });
    console.log(accounts);
    console.log("asdasd")
  } else {
    document.getElementById("connectButton").innerHTML =
      "Please install MetaMask";
  }
}

// balances();

module.exports = {
  s,
  connect,
  execute,
};



// const web3 = require('web3');
// console.log(web3)
// console.log("asdeqweq")

// console.log(web3.utils.toWei('34', 'ether'))
// // console.log(web3.eth.getBlock('latest'))
// var accountAddress = "0x74d5971F92861b26757b8D6c7cf7F7003259eaAF"
// // web3.eth.getBalance(accountAddress).then(console.log)
// console.log(window.ethereum)

// // In Node.js, con el cdn se inicializa solo
// // const Web3 = require('web3');

// const web33 = new Web3('https://rpc.api.moonbase.moonbeam.network'); 
// console.log(web33);


// const ethereumButton = document.querySelector('.enableEthereumButton');
// const showAccount = document.querySelector('.showAccount');

// ethereumButton.addEventListener('click', () => {
//   const acc=getAccount();
//   printAccount(acc);

// });


// // const ethereumButton = document.querySelector('.enableEthereumButton');
// const sendEthButton = document.querySelector('.sendEthButton');

// let accounts = [];

// //Sending Ethereum to an address
// sendEthButton.addEventListener('click', () => {
//   ethereum
//     .request({
//       method: 'eth_sendTransaction',
//       params: [
//         {
//           from: accounts[0],
//           to: '0x518561C267F8ac931c40284c1aa06E824BABE434',//cuenta 2
//           value: '0x429D069189E0000',//3**16 0x
//           gasPrice: '0x09184e72a000',
//           gas: '0x2710',
//         chainId: "0x507", // Moonbase Alpha's chainId is 1287, which is 0x507 in hex
//                     chainName: "Moonbase Alpha",
//                     nativeCurrency: {
//                         name: 'DEV',
//                         symbol: 'DEV',
//                         decimals: 18
//                     },
//         rpcUrls: ["https://rpc.api.moonbase.moonbeam.network"],
//         blockExplorerUrls: ["https://moonbase.moonscan.io/"]
//         },
//       ],
//     })
//     .then((txHash) => console.log(txHash))
//     .catch((error) => console.error);
// });

// // ethereumButton.addEventListener('click', () => {
// //   getAccount();
// // });

// // async function getAccount() {
// //   accounts = await ethereum.request({ method: 'eth_requestAccounts' });
// // }


// async function getAccount() {
//   const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
//   const account = accounts[0];
//   showAccount.innerHTML = account;
//   return account
// }

// async function printAccount(account) {
// console.log(account);

// }
