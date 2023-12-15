// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFaDaHnZsykaEdwNTGSlOaCt3eky-Unao",
  authDomain: "nextweb-a10e7.firebaseapp.com",
  projectId: "nextweb-a10e7",
  storageBucket: "nextweb-a10e7.appspot.com",
  messagingSenderId: "920459679040",
  appId: "1:920459679040:web:9b36568c985ff8cd2656a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);
