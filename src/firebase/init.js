import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyD9Gj7VLd8bt7x7D_eds0hAzWiD4DPzix0",
  authDomain: "chat-pp-3c18d.firebaseapp.com",
  databaseURL: "https://chat-pp-3c18d.firebaseio.com",
  projectId: "chat-pp-3c18d",
  storageBucket: "chat-pp-3c18d.appspot.com",
  messagingSenderId: "375408871578",
  appId: "1:375408871578:web:d6c477e329cca00fe0f723"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
