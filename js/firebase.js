var firebaseConfig = {
  apiKey: "AIzaSyC2RF_WraaMVlT3T640XTudvFFDno8I-w8",
  authDomain: "dapp-ee36a.firebaseapp.com",
  projectId: "dapp-ee36a",
  storageBucket: "dapp-ee36a.appspot.com",
  messagingSenderId: "1085596894263",
  appId: "1:1085596894263:web:ad12b6b6ba5b6f6351abb2",
  measurementId: "G-HWMHYYMGV6"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();