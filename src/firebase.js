import app from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyAA15OhaVmGjeJdY7XI9Ss1JxIKlj4zoZg",
  authDomain: "sportspotdb.firebaseapp.com",
  projectId: "sportspotdb",
  storageBucket: "sportspotdb.appspot.com",
  messagingSenderId: "761848898721",
  appId: "1:761848898721:web:8c7425d46ba9ee042ebce0",
  measurementId: "G-LK06J7RMRP"
  };
  
  // Initialize Firebase
 app.initializeApp(firebaseConfig);
 const db = app.firestore()
 const auth = app.auth()
  export { db, auth }
