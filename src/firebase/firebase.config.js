// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkzzihOM1aN7tIFtm-XWye6daBHWAQ8Uc",
  authDomain: "food-fovers-network.firebaseapp.com",
  projectId: "food-fovers-network",
  storageBucket: "food-fovers-network.firebasestorage.app",
  messagingSenderId: "201839651484",
  appId: "1:201839651484:web:d5c1f3e5675c57472d1b59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;