// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvrGopNUMqIc6oYLyE32lcqpNStrZ6pcU",
  authDomain: "fir-auth-bb7d7.firebaseapp.com",
  projectId: "fir-auth-bb7d7",
  storageBucket: "fir-auth-bb7d7.appspot.com",
  messagingSenderId: "324018699784",
  appId: "1:324018699784:web:8554a2d23c50b67fc15bbd",
  measurementId: "G-QQ94E0B4LM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

