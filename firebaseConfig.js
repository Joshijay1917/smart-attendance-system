// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuQL0WmD5y-NRMY51KZapv6frtaupykH4",
  authDomain: "smart-attendance-system-1f789.firebaseapp.com",
  projectId: "smart-attendance-system-1f789",
  storageBucket: "smart-attendance-system-1f789.firebasestorage.app",
  messagingSenderId: "813985617007",
  appId: "1:813985617007:web:63d272b277f2e047d8299a",
  measurementId: "G-VJ7TTC7TH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export { app, analytics, auth };