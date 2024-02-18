import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
//Import the fuction 
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsFVkLeaDRPtc3KyyrEXeILWoS6Pw7y00",
  authDomain: "jsi16-e7229.firebaseapp.com",
  projectId: "jsi16-e7229",
  storageBucket: "jsi16-e7229.appspot.com",
  messagingSenderId: "922686084020",
  appId: "1:922686084020:web:33d8081b55761d621698e1",
  measurementId: "G-76S8VQTTZ3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);