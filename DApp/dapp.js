// contract address on Rinkeby:
const acAddress = '0xc00A82A6E05107c0C9349A0Bd8167D62C508fd7C'

// add contract ABI from Remix:

const acABI =
[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "User",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "Result",
				"type": "bool"
			}
		],
		"name": "CorrectAnswer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "User",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint32",
				"name": "Attempts",
				"type": "uint32"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "MedalType",
				"type": "string"
			}
		],
		"name": "TokenMinted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "values",
				"type": "uint256[]"
			}
		],
		"name": "TransferBatch",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "TransferSingle",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "value",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "URI",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "mintToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeBatchTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_Answer_1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Answer_2",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Answer_3",
				"type": "string"
			}
		],
		"name": "setAnwser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "newuri",
				"type": "string"
			}
		],
		"name": "setURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_Answer_1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Answer_2",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Answer_3",
				"type": "string"
			}
		],
		"name": "userAnswer",
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
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_Answer_1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Answer_2",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Answer_3",
				"type": "string"
			}
		],
		"name": "adminCheckAnswer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "AnswerSet",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "accounts",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			}
		],
		"name": "balanceOfBatch",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Bronze_Medal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Correct_Medal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Gold_Medal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Silver_Medal",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "tokenAlreadyMinted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalAttempts",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalCorrect",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalTokensMinted",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "uri",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userAttempts",
		"outputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userCorrect",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]



// Using the 'load' event listener for Javascript to
// check if window.ethereum is available

window.addEventListener('load', function() {

  if (typeof window.ethereum !== 'undefined') {
    console.log('window.ethereum is enabled')
    if (window.ethereum.isMetaMask === true) {
      console.log('MetaMask is active')
      let mmDetected = document.getElementById('mm-detected')
      mmDetected.innerHTML += 'MetaMask Is Available!'

       

    } else {
      console.log('MetaMask is not available')
      let mmDetected = document.getElementById('mm-detected')
      mmDetected.innerHTML += 'MetaMask Not Available!'
      // let node = document.createTextNode('<p>MetaMask Not Available!<p>')
      // mmDetected.appendChild(node)
    }
  } else {
    console.log('window.ethereum is not found')
    let mmDetected = document.getElementById('mm-detected')
    mmDetected.innerHTML += '<p>MetaMask Not Available!<p>'
  }
})


var web3 = new Web3(window.ethereum)


// Grabbing the button object,

const mmEnable = document.getElementById('mm-connect');

// since MetaMask has been detected, we know
// `ethereum` is an object, so we'll do the canonical
// MM request to connect the account.
//
// typically we only request access to MetaMask when we
// need the user to do something, but this is just for
// an example

mmEnable.onclick = async () => {
  await ethereum.request({ method: 'eth_requestAccounts'})
  // grab mm-current-account
  // and populate it with the current address
  var mmCurrentAccount = document.getElementById('mm-current-account');
  mmCurrentAccount.innerHTML = 'Current Account: ' + ethereum.selectedAddress
}


// grab the button for input to a contract:
const acadminSubmit = document.getElementById('ac-admininput-button');

acadminSubmit.onclick = async () => {
  // grab value from input

  const acadminAnswerA = document.getElementById('ac-admin-answer-A').value;
  const acadminAnswerB = document.getElementById('ac-admin-answer-B').value;
  const acadminAnswerC = document.getElementById('ac-admin-answer-C').value;

  
  console.log(acadminAnswerA, acadminAnswerB, acadminAnswerC)

  var web3 = new Web3(window.ethereum)

  // instantiate smart contract instance

  const answerChecker = new web3.eth.Contract(acABI, acAddress)
  answerChecker.setProvider(window.ethereum)

  await answerChecker.methods.setAnwser(acadminAnswerA, acadminAnswerB, acadminAnswerC).send({from: ethereum.selectedAddress})


  
}





// grab the button for input to a contract:
const acuserSubmit = document.getElementById('ac-userinput-button');

acuserSubmit.onclick = async () => {
  // grab value from input

  const acUserAnswerA = document.getElementById('ac-user-answer-A').value;
  const acUserAnswerB = document.getElementById('ac-user-answer-B').value;
  const acUserAnswerC = document.getElementById('ac-user-answer-C').value;

  
  console.log(acUserAnswerA, acUserAnswerB, acUserAnswerC)

  var web3 = new Web3(window.ethereum)

  // instantiate smart contract instance

  const answerChecker = new web3.eth.Contract(acABI, acAddress)
  console.log(answerChecker.address)
  
  const acDisplayanswer = document.getElementById('ac-display-correctanswerresult');

  await answerChecker.methods.userAnswer(acUserAnswerA, acUserAnswerB, acUserAnswerC)
  .send({from: ethereum.selectedAddress})
  .on('error', function(error) {
	console.log(error)
	acDisplayanswer.innerHTML = 'Answers no submitted, make sure you are using the Rinkeby network and have enough Ether.';	

	}) 
  .on('receipt', function (receipt) {
	console.log(receipt)
	var eventCorrectOutput = receipt.events.CorrectAnswer.returnValues.Result;

	if(eventCorrectOutput == true) {
		acDisplayanswer.innerHTML = 'Congratulations! You are correct, you can now mint your token if you have not done so already.'

	} else {

	acDisplayanswer.innerHTML = 'You are incorrect, please try again.';
	}
  })
}

const acuserMint = document.getElementById('ac-usermint-button');
const medalimage = document.getElementById('medal_holder')

acuserMint.onclick = async () => {
	
  	var web3 = new Web3(window.ethereum)
  
	const answerChecker = new web3.eth.Contract(acABI, acAddress)
	answerChecker.setProvider(window.ethereum)
	const acDisplayMintInfo = document.getElementById('ac-display-mintInfo');

	await answerChecker.methods.mintToken().send({from: ethereum.selectedAddress})
	.on('receipt',function (receipt) {
		
				console.log(receipt)
				var eventMintedToken = receipt.events.TokenMinted.returnValues.MedalType;
				var eventAttemptsatMint = receipt.events.TokenMinted.returnValues.Attempts;
				acDisplayMintInfo.innerHTML = 'Congratulations you now own a ' + eventMintedToken + ' it took you ' + eventAttemptsatMint +' attempts.'
				var eventMintedToken = receipt.events.TokenMinted.returnValues.MedalType;
			if(eventMintedToken == 'Gold_Medal') {
				var medalTypeimg = '<img src="/static/goldmedal.png">';
				medalimage.innerHTML = medalTypeimg;
			} else if(eventMintedToken == 'Silver_Medal') {
				var medalTypeimg = '<img src="/static/silvermedal.png">';
				medalimage.innerHTML = medalTypeimg;
			} else if(eventMintedToken == 'Bronze_Medal') {
				var medalTypeimg = '<img src="/static/bronzemedal.png">';
				medalimage.innerHTML = medalTypeimg;
			} else {
				var medalTypeimg = '<img src="/static/plainmedal.png">';
				medalimage.innerHTML = medalTypeimg;
			}
		
	  })
	.on('error', function(error) {
		console.log(error)
		acDisplayMintInfo.innerHTML = 'Token not minted, you can only mint one token after getting the questions correct.';	

		})
	
  }





const acGetStats = document.getElementById('ac-Show-Stats')

acGetStats.onclick = async () => {

  var web3 = new Web3(window.ethereum)

  const AnswerChecker = new web3.eth.Contract(acABI, acAddress)
  AnswerChecker.setProvider(window.ethereum)

  var checkIsAnsSet = await AnswerChecker.methods.AnswerSet().call()
  const acDisplayAnswerSet = document.getElementById('ac-display-answerSet')
  acDisplayAnswerSet.innerHTML = 'Have the answers been set?: ' + checkIsAnsSet

  var checkTotalCorrect = await AnswerChecker.methods.totalCorrect().call()
  const acDisplayTotalCorrect = document.getElementById('ac-display-totalCorrect')
  acDisplayTotalCorrect.innerHTML = 'Total Correct Answers: ' + checkTotalCorrect

  var checkTotalAttempts = await AnswerChecker.methods.totalAttempts().call()
  const acDisplayTotalAttempts = document.getElementById('ac-display-totalAttempts')
  acDisplayTotalAttempts.innerHTML = 'Total Attempts: ' + checkTotalAttempts

  var checkTotalTokens = await AnswerChecker.methods.totalTokensMinted().call()
  const acDisplayTotalMinted = document.getElementById('ac-display-totalTokens Minted')
  acDisplayTotalMinted.innerHTML = 'Total Tokens Minted: ' + checkTotalTokens

  var checkuserCorrect = await AnswerChecker.methods.userCorrect(ethereum.selectedAddress).call()
  const acDisplayisUserCorrect = document.getElementById('ac-display-isusercorrect')
  acDisplayisUserCorrect.innerHTML = 'Is user Correct? ' + checkuserCorrect

  var checkuserMinted = await AnswerChecker.methods.tokenAlreadyMinted(ethereum.selectedAddress).call()
  const acDisplayisUsertoken = document.getElementById('ac-display-usertokenminted')
  acDisplayisUsertoken.innerHTML = 'Has user minted token? ' + checkuserMinted

  var checkuserAttempts = await AnswerChecker.methods.userAttempts(ethereum.selectedAddress).call()
  const acDisplayuserattempts = document.getElementById('ac-display-userattempts')
  acDisplayuserattempts.innerHTML = 'User Attempts: ' + checkuserAttempts

}

