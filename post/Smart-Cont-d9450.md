---
title: Smart Contract Explained Smart Contract Explained
metaTitles: Smart contract
image: https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3624cc128171271.6167a1a6ac0a6.gif
description: A smart is an account which is controlled by code...
date: 16 May 2021
---

# Smart Contracts

Created Time: July 22, 2021 1:32 PM
Last Edited at: August 8, 2021 3:44 PM
Tags: ABI, Gas, remix's, solidity, transaction, wei

A smart is an account which is controlled by code insted by human.The code instructs the smart contracts how to behave.

<!-- 
### Features of Contract account

- balance- amount this account owns
- storage - data store for contacts
- code -Raw machine code for contracts
- **Exteranal account**
    
    -account used by humans which can  be connected and used in any network
    
- **Contract account**
    
    These account are only specific to one individual network
    

![Smart%20Cont%20d9450/Capture16.jpg](Smart%20Cont%20d9450/Capture16.jpg)

## Programming

**Solidity**

- solidity is written in .sol file
- Strongly typed
- Simialr to js
- It as gigantic 'gotchas'
- Contract to be in small

Solidity program (Contract defination) →Solidity Compailer → Byte code ready for deployment & Appliction Binary Interface (API) or ABI.

![Smart%20Cont%20d9450/Capture17.jpg](Smart%20Cont%20d9450/Capture17.jpg)

 

```go
pragma solidity ^0.4.17;

contract Inbox{
	string public message;
	function Inbox(string initialMessage) public {
		message=initialMessage;
	}
	function setMessage(string newMessage) public {
		message=newMessage;
	}
	function getMassage() public view returns (string){
		return message;
	}
}
```

- contract is similer to class in oops.
- pragma defines the version of the solidity compiler need to be used.
- Storage variable or instance variable→exists when the contract is alive.
- It automatically stored in the blockchain with the contract permanately in the ethereum block chain

### Function Types

- **public** -Anyone with a etherum account can access the funxtion.
- **Private**-only the contract code can access this function.
- **constant/view** - just used of viewing data.
- **pure**- will not madify and even not access any data
- **payable**-used for paying money

---

## Remix’s

[Remix - Ethereum IDE](https://remix.ethereum.org/#optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.4+commit.c7e474f2.js)

Remix IDE is an open source web and desktop application. It fosters a fast development cycle and has a rich set of plugins with intuitive GUIs.

 Remix is used for the entire journey of contract development as well as being a playground for learning and teaching Ethereum.

Remix IDE is a powerful open source tool that helps you write Solidity contracts straight from the browser.

## Transaction for creating a contract

![Smart%20Cont%20d9450/Capture19.jpg](Smart%20Cont%20d9450/Capture19.jpg)

> When we send money to an account we change the data that was stored on the blockchain.*Every transaction change the balance of 2 accounts.*
> 
- To create a contract we need t operform a transaction so the will be stored in the blockchain.
- **So at any time we want change the data in the blockchain we need to sybmit a transaction.**

![Smart%20Cont%20d9450/Capture26.jpg](Smart%20Cont%20d9450/Capture26.jpg)

- There are 2 type of function that can be executed to the blockchain. One  change the data and other just to view the data
- We modify the data by preforming a transaction not by calling the function. So we invoke the function that modify data by sending a transaction to the contract instance that targe the specific function.
- This transaction function will return the transation hash on executing the function(Changing the data).

![Smart%20Cont%20d9450/Capture27.jpg](Smart%20Cont%20d9450/Capture27.jpg)

## Different measurement of Ether

[Ethereum (ETH) Mainnet - Correlations - etherchain.org - 2021](https://etherchain.org/tools/unitConverter)

## Gas

It is the fee for deploying the contracts or eny transaction to the etherum network. Its like paying the fee to the imners for hosting the code(contravt,transaction) in the network.

Each operation in the code like ADD ,SUB..there is amount of gas assigned that we need to pay.

For any transaction that is changing the data or implementating the code we need to specify 2 property with it.

- Gas price
- Gas limit

![Smart%20Cont%20d9450/Capture28.jpg](Smart%20Cont%20d9450/Capture28.jpg)

### Lets conaider a code

```jsx
function doMath(int a,int b){
	a+b;
	b-a;
	a*b;
	a==0;
}
```

- While implementing the smart contract with this code. We add gas price and gas limit with it.
- While executing the code miner check the gas consumed to perform each operation and if it exceed the gas limit to program halt at that point.
- If gas limit is more than what is consumed then the extra will be returned.

![Smart%20Cont%20d9450/Capture29.jpg](Smart%20Cont%20d9450/Capture29.jpg)

![Smart%20Cont%20d9450/Capture30.jpg](Smart%20Cont%20d9450/Capture30.jpg) -->