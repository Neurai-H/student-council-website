import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAz0tCbVWtWTOlCPTfydligochebYxCFZA",
  authDomain: "oxbridge-stuco-website.firebaseapp.com",
  projectId: "oxbridge-stuco-website",
  storageBucket: "oxbridge-stuco-website.firebasestorage.app",
  messagingSenderId: "865196902474",
  appId: "1:865196902474:web:f2f1277de8639adc7f7eb3",
  measurementId: "G-WHJFX279RY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
