// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBUnndx3wPQ-vZjGjItKptu0ehC3VhpYmo",
    authDomain: "goabay-shop.firebaseapp.com",
    projectId: "goabay-shop",
    storageBucket: "goabay-shop.appspot.com",
    messagingSenderId: "495937872586",
    appId: "1:495937872586:web:1eccbd994e04a576188a33",
    measurementId: "G-9PB24RVD05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);