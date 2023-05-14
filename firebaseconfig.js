// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4iwkyjb-rsP-0mih1dzsT02kN9A3hpiE",
  authDomain: "doan-iot-d82ae.firebaseapp.com",
  databaseURL: "https://doan-iot-d82ae-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "doan-iot-d82ae",
  storageBucket: "doan-iot-d82ae.appspot.com",
  messagingSenderId: "1044455508384",
  appId: "1:1044455508384:web:ba997f2608f57531f47cc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var database = firebase.database();