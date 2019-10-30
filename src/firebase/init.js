import firebase from 'firebase'
import firestore from 'firebase/firestore'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAlaYl-2WzZKN9cb5mdePhEouCr8IPwZ4E",
    authDomain: "geo0ninjas.firebaseapp.com",
    databaseURL: "https://geo0ninjas.firebaseio.com",
    projectId: "geo0ninjas",
    storageBucket: "geo0ninjas.appspot.com",
    messagingSenderId: "324080199646",
    appId: "1:324080199646:web:190a703a57ac9dfd2d1f4f"
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings( {timestampsInSnapshots: true} )
export default firebaseApp.firestore()

