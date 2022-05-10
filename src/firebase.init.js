// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcPVGnLvzaMSRH3uR9jhFVendGIKUn5Ik",
  authDomain:process.env.USER_REACT_authDomain,
  projectId:process.env.USER_REACT_projectId,
  storageBucket:process.env.USER_REACT_storageBucket,
  messagingSenderId:process.env.USER_REACT_messagingSenderId,
  appId:process.env.USER_REACT_appId,
  measurementId:process.env.USER_REACT_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;