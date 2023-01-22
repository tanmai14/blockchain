// var items = "null";
// localStorage.items=items;

// var count=0;
var contractAbi=[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_productName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_manName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_date_of_manufacture",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_weight",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_dimensions",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_loc",
				"type": "string"
			}
		],
		"name": "addProduct",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_productId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "info",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_date",
				"type": "string"
			}
		],
		"name": "addStatus",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_productId",
				"type": "uint256"
			}
		],
		"name": "displayProdInfo",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
var addr='0xf9a69158268bA9cB7693b7F654755E49BD883143';

if (typeof web3 !== 'undefined') {
	web3 = new Web3(web3.currentProvider);
	web3 = new Web3(new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545'));
  } else {
	web3 = new Web3(new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545'));
  }
  //Get List Accounts from the ganache 
// web3.eth.getAccounts()
// .then(function (e) {
// var accountsList=e;
// console.log(accountsList)
// });
  // Set the Contract
var contract = new web3.eth.Contract(contractAbi, addr);

