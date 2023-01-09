// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-QQ9AHCLGmQYge9V9XRHo5sBZnkbFm6s",
    authDomain: "magis-canteen-xu.firebaseapp.com",
    projectId: "magis-canteen-xu",
    storageBucket: "magis-canteen-xu.appspot.com",
    messagingSenderId: "63550860367",
    appId: "1:63550860367:web:474b364aa5844200728e3a",
    measurementId: "G-0L501QRQQ0",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
