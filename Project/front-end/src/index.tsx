import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/app.component';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


export default app;