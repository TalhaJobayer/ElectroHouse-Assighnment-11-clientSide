// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcPVGnLvzaMSRH3uR9jhFVendGIKUn5Ik",
  authDomain: "electrohouse-b4eae.firebaseapp.com",
  projectId: "electrohouse-b4eae",
  storageBucket: "electrohouse-b4eae.appspot.com",
  messagingSenderId: "75601283819",
  appId: "1:75601283819:web:83cf6c247308fcec47ccae",
  measurementId: "G-Q2WDN28HE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;