import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMMgm9xniM7NwyixwmnpWbn_dOIUS6tdo",
  authDomain: "covidator.firebaseapp.com",
  databaseURL: "https://covidator.firebaseio.com",
  projectId: "covidator",
  storageBucket: "covidator.appspot.com",
  messagingSenderId: "833049678043",
  appId: "1:833049678043:web:7d4ba17da084ad0199bcfe",
  measurementId: "G-9M7W32T54F"
};

const fire=firebase.initializeApp(firebaseConfig)

export default fire;