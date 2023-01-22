//prodID, date, textarea

document.getElementById('qrbtn').onclick=function(event)
{ 
    var prodID1=parseInt(document.getElementById('prodID').value);
var date1=document.getElementById('date').value;
var textarea1=document.getElementById('textarea').value;
if(prodID1==='' || date1===''||textarea1===''){
	alert("Please provide all the required details")
}
else{
    // console.log(textarea1);
	event.preventDefault();
	web3.eth.getAccounts().then(async function(accounts) {
		contract.methods.addStatus(prodID1,textarea1,date1).send({from:accounts[2],gas:3000000}).then(
			function(ret){
				if(ret.status===true)
				{
					alert("Status Updated Successfully...");
				}
			}
		)
})
}
}