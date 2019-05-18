import Firebase from 'firebase';  
  let firebaseConfig = {
    apiKey: "AIzaSyCwzsLg8pC8l2sIC819BGqTcqG9ddEbdig",
    authDomain: "foodcourt-44e45.firebaseapp.com",
    databaseURL: "https://foodcourt-44e45.firebaseio.com",
    projectId: "foodcourt-44e45",
    storageBucket: "foodcourt-44e45.appspot.com",
    messagingSenderId: "894728576413",
    appId: "1:894728576413:web:c0526b131fd47617"
  };
  // Initialize Firebase
  let app = Firebase.initializeApp(firebaseConfig);  
export const db = app.database();  
export const auth =app.auth();
export const storage = app.storage()

