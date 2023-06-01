// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkLpB7uDfmakHpNrZLQrH47aNwg0Dms1I",
  authDomain: "fileuploaderauthproject-27fe1.firebaseapp.com",
  projectId: "fileuploaderauthproject-27fe1",
  storageBucket: "fileuploaderauthproject-27fe1.appspot.com",
  messagingSenderId: "103432106268",
  appId: "1:103432106268:web:591c61a38b03b4b2274ad9",
  measurementId: "G-5JE61C6NGP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
