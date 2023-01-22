// var items=0;
// var count=0;
// localStorage.setItem("items","null");
if(window.name===""){
window.name="null";}
var localItems;
var itemsString;
var itemsInt;
document.getElementById('canvas').style.border="";
document.getElementById('addProd').onclick=function(event)
{
	event.preventDefault();
	//pname,pdate,manName
	var ProductName=document.getElementById('pname').value;
	var ProductDate=document.getElementById('pdate').value;
	var ManName=document.getElementById('manName').value;
	var dimensions1=document.getElementById('dimensions').value;
	var weight1=document.getElementById('weight').value;
	var location1=document.getElementById('location').value;
	if(ProductName==='' || ProductDate===''||ManName==='' || dimensions1==='' || weight1==='' || location1===''){
		alert("Please provide all the required details")
	}
	else{
	web3.eth.getAccounts().then(async function(accounts) {
		contract.methods.addProduct(ProductName,ManName,ProductDate,weight1,dimensions1,location1).send({from:accounts[1],gas:3000000}).then(
			function(ret){
				if(ret.status===true)
				{
					alert("Product added Successfully");
					
				}

			// console.log(ret);
			}
		)
})
		// if(count===0){
		// 	items=0;
		// 	count++;
		// }
		// else
		// {items++;}
		// if(localStorage.getItem("items")==="null"){
		// 	localStorage.setItem("items","0");
		// }
		// else{

		// 	localStorage.setItem("items",(parseInt(localStorage.getItem("items"))++).toString())
		// }

		if(window.name==="null"){
				window.name="0";
			}
			else{
				itemsInt=(parseInt(window.name));
				++itemsInt;
				window.name=itemsInt.toString();
			}
		document.getElementById('canvas').style.border="solid white 3px";
		var qr=new QRious({
			element:document.getElementById('canvas'),
			value:window.name,
		});
	}
    
}