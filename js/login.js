firebase.auth().onAuthStateChanged((user) => {
    if (user!= null) {
        
    } else {
      // User is signed out
      // ...
    }
  });
  function login() {
      var username=document.getElementById('email_field').value;
      var password=document.getElementById('pass_field').value;
      // if(document.getElementById('manrb').checked){
        if(username.split('@')[0]==='manufacturer'){
        firebase.auth().signInWithEmailAndPassword(username, password)
      .then((userCredential) => {
          window.location="addProd.html";
        // Signed in
        
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
      }
      if(username.split('@')[0]==='distributor' || username.split('@')[0]==='retailer'){
        firebase.auth().signInWithEmailAndPassword(username, password)
      .then((userCredential) => {
          window.location="addStatus.html";
        // Signed in
        
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
      }

      
  }