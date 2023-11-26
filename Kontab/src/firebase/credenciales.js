import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAaNOtjV6Fba-IPHRIB7BuQ3BHZjPWr9qk",
  authDomain: "kontab-cejtech.firebaseapp.com",
  projectId: "kontab-cejtech",
  storageBucket: "kontab-cejtech.appspot.com",
  messagingSenderId: "243383081040",
  appId: "1:243383081040:web:489cb76c48957ed6531955",
  measurementId: "G-MSGHHJDKXS"
};

export const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);
