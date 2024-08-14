import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  // Input your firebase config here
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
