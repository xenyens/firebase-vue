// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeBu5t7LD71SHIfstgWC0JO4gPyU_OAFI",
  authDomain: "vue-2025.firebaseapp.com",
  projectId: "vue-2025",
  storageBucket: "vue-2025.firebasestorage.app",
  messagingSenderId: "318091533427",
  appId: "1:318091533427:web:727dc81bfa8199044fde06",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
export { auth };
