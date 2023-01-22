const signupForm = document.querySelector('#signup-form');
var gender
var collection=0;
// const docRef=db.doc("manufacturer");
document.getElementById('register').onclick= function(e){
    e.preventDefault();
    if(document.getElementById('malerb').checked){
     gender="Male";}
    if(document.getElementById('femalerb').checked){
         gender="Female";}
        if(document.getElementById('otherrb').checked){
             gender="Others";}
    const email=signupForm['email'].value;
    const password=signupForm['password'].value;
    console.log(email,password)
    var docData={
        Cname:signupForm.cname.value,
                Clicense:signupForm.cnumber.value,
                Gender:gender,
                Oname:signupForm.oname.value,
                address:signupForm.address.value,
                email:signupForm.email.value,
                phone:signupForm.phone.value
    }
            var doclink="doc "+collection;
        db.collection("manufacturer").doc(doclink).set(docData)
        .then(()=>{
            console.log("document is written");
            collection++;
        })
        .catch((error)=>{
            console.error("error writing the document",error);
        });
        //window.alert("saved to firestore beta");


    auth.createUserWithEmailAndPassword(email , password).then(cred =>{
        console.log(cred);
        window.alert("Registered Successfully")
        signupForm.reset();

    });
} 
