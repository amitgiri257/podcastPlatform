// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";



// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqkRGjv1XH0_Mdl8SFOm67svzDH5b0d0A",
  authDomain: "podcast-app1-react.firebaseapp.com",
  projectId: "podcast-app1-react",
  storageBucket: "podcast-app1-react.appspot.com",
  messagingSenderId: "475792753993",
  appId: "1:475792753993:web:2e011a048304f08e704698",
  measurementId: "G-W8DY4JDXZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage= getStorage(app);
const auth = getAuth(app);

export {auth,db,storage};