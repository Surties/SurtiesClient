import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAbCVYd-rreS-iVEu2BeSyDx2FMT8o98RI",
  authDomain: "surtieswebapplication.firebaseapp.com",
  projectId: "surtieswebapplication",
  storageBucket: "surtieswebapplication.appspot.com",
  messagingSenderId: "363461993591",
  appId: "1:363461993591:web:a8ccf8d5dab20e16101272",
  measurementId: "G-XPETG44S7Y",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
