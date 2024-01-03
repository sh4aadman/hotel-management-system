// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa-octf-q5nDvNgtCLmjKanspHru1MOEE",
  authDomain: "hotel-management-system-hms.firebaseapp.com",
  projectId: "hotel-management-system-hms",
  storageBucket: "hotel-management-system-hms.appspot.com",
  messagingSenderId: "543801175181",
  appId: "1:543801175181:web:4e7f0a49d106a1402bc6c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;