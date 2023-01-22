//Pname,Pweight,Ploc,date
document.getElementById('Pname').disabled=true;
document.getElementById('Mname').disabled=true;
document.getElementById('Ploc').disabled=true;
document.getElementById('mandate').disabled=true;
document.getElementById('Pweight').disabled=true;
document.getElementById('status').disabled=true;
document.getElementById('Pdimensions').disabled=true;


document.getElementById('go').onclick=function (event) {
	prodId=parseInt(document.getElementById('prodID').value);
	event.preventDefault();
	web3.eth.getAccounts().then(async function(accounts) {

		contract.methods.displayProdInfo(prodId).call().then(function(ans){
			// alert(ans);
            var dis=ans;
            var list_of_strings=dis.split(",");
    document.getElementById('Pname').value=list_of_strings[0];
    document.getElementById('Mname').value=list_of_strings[1];
    document.getElementById('mandate').value=list_of_strings[2];
    document.getElementById('Pweight').value=list_of_strings[3];
    document.getElementById('Ploc').value=list_of_strings[4];
    document.getElementById('Pdimensions').value=list_of_strings[5];
	var desc=list_of_strings[6].split("~");
	var info=" ";
	for (let i = 0; i < desc.length; i++) {
		info=desc[i].concat(info);
	}
    document.getElementById('status').value=info;

	
    
		});
			
			
			
		});
}