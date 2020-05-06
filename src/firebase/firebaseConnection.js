import firebase from 'firebase';

let firebaseConfig = {
  apiKey: "AIzaSyDRJu6BoIWTxLfuxnCTW5ZMYd_w5AISarw",
  authDomain: "meuapp-8127a.firebaseapp.com",
  databaseURL: "https://meuapp-8127a.firebaseio.com",
  projectId: "meuapp-8127a",
  storageBucket: "meuapp-8127a.appspot.com",
  messagingSenderId: "68010751360",
  appId: "1:68010751360:web:1dc16588e89b2230f7fd65",
  measurementId: "G-V5LQSRE475"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

  export default firebase;