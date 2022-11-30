// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU8Z6dYNl5eBTetCeRPrxQDrTPtDi2g8k",
  authDomain: "portfolio-af80d.firebaseapp.com",
  projectId: "portfolio-af80d",
  storageBucket: "portfolio-af80d.appspot.com",
  messagingSenderId: "662079790866",
  appId: "1:662079790866:web:2aa64391b747c206749dcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseInit = () =>{ 
    return app
}