import * as firebase from 'firebase';  // Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBK2anLd7PjcuO0Zfe1P-xWv2OZ0TTZtmA",
    authDomain: "produceapp-e853f.firebaseapp.com",
    databaseURL: "https://produceapp-e853f.firebaseio.com",
    projectId: "produceapp-e853f",
    storageBucket: "produceapp-e853f.appspot.com",
    messagingSenderId: "32583131287"
};
firebase.initializeApp(firebaseConfig);
export default firebase;
