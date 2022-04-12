// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDF1HrBv9Z4K3pmse5-Bg90OU6q2n9NAsI",
    authDomain: "react-hotel-booking-auth.firebaseapp.com",
    projectId: "react-hotel-booking-auth",
    storageBucket: "react-hotel-booking-auth.appspot.com",
    messagingSenderId: "879231844342",
    appId: "1:879231844342:web:b9d325b7924c2f7eea91d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;