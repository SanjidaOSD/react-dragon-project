// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnxPjePSBKxvFnqmp6ePBiwcdXNNTL_54",
  authDomain: "react-dragon-project-auth.firebaseapp.com",
  projectId: "react-dragon-project-auth",
  storageBucket: "react-dragon-project-auth.appspot.com",
  messagingSenderId: "787824778389",
  appId: "1:787824778389:web:969081bc60b8f3b1438f9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;