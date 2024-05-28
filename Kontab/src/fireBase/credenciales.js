// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaNOtjV6Fba-IPHRIB7BuQ3BHZjPWr9qk",
  authDomain: "kontab-cejtech.firebaseapp.com",
  projectId: "kontab-cejtech",
  storageBucket: "kontab-cejtech.appspot.com",
  messagingSenderId: "243383081040",
  appId: "1:243383081040:web:489cb76c48957ed6531955",
  measurementId: "G-MSGHHJDKXS"
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(appFirebase);
const analytics = getAnalytics(appFirebase);