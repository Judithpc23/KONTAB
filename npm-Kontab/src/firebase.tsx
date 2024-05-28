import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAF1o04Wv5ooiuVvVWLrOORssg7iu6ChRc",
  authDomain: "kontab-e4161.firebaseapp.com",
  projectId: "kontab-e4161",
  storageBucket: "kontab-e4161.appspot.com",
  messagingSenderId: "42334304192",
  appId: "1:42334304192:web:621169bc60dd180fad7a25"
};

export const appFirebase = initializeApp(firebaseConfig);