// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs1x34NyqdIRgGchMc5d4s3tP4KLV3LmA",
  authDomain: "ecoharvest-22d40.firebaseapp.com",
  projectId: "ecoharvest-22d40",
  storageBucket: "ecoharvest-22d40.appspot.com",
  messagingSenderId: "332125639336",
  appId: "1:332125639336:web:303197ab813997af69e89d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);