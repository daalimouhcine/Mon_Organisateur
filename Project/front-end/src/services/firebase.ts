import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBZgh2znpIjb78nP5MJmLKpTgURLdu2hyw",
  authDomain: "mon-organisateur.firebaseapp.com",
  projectId: "mon-organisateur",
  storageBucket: "mon-organisateur.appspot.com",
  messagingSenderId: "100954401641",
  appId: "1:100954401641:web:014ad72445b49d076cabf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export default storage;