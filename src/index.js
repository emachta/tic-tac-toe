import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "./App.css";
import reportWebVitals from "./reportWebVitals";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiaCn7gTyqrBZykSfwhMfEAiJ_4LhKDl8",
  authDomain: "tic-tac-toe-5f88b.firebaseapp.com",
  projectId: "tic-tac-toe-5f88b",
  storageBucket: "tic-tac-toe-5f88b.appspot.com",
  messagingSenderId: "394540774988",
  appId: "1:394540774988:web:f785890b51e810119d66e9",
  measurementId: "G-TZECRNEGNZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
