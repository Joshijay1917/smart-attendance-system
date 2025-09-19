// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
console.log("Key=",process.env.VITE_FIREBASE_API_KEY);
console.log("AuthDoma=",process.env.VITE_FIREBASE_AUTH_DOMAIN);
console.log("ID=",process.env.VITE_FIREBASE_PROJECT_ID);
console.log("storage=",process.env.VITE_FIREBASE_STORAGE_BUCKET);
console.log("sender=",process.env.VITE_FIREBASE_MESSAGING_SENDER_ID);
console.log("app=",process.env.VITE_FIREBASE_APP_ID);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
  measurementId: "G-VJ7TTC7TH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export { app, analytics, auth };
