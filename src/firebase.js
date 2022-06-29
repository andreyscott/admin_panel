// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgztbYnytOEmSYQUMwHYQ95iwEwIqVWXU",
  authDomain: "admin-panel-9a055.firebaseapp.com",
  projectId: "admin-panel-9a055",
  storageBucket: "admin-panel-9a055.appspot.com",
  messagingSenderId: "546176810112",
  appId: "1:546176810112:web:b0f94c33650085c552ba65",
  measurementId: "G-FW0WSPFR3K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);