import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC6uMMg68tL-YO33WpzBT-oQJqfKPiwdrk",
    authDomain: "tienda-de-asados.firebaseapp.com",
    projectId: "tienda-de-asados",
    storageBucket: "tienda-de-asados.appspot.com",
    messagingSenderId: "198698827505",
    appId: "1:198698827505:web:84b75f34dfc13b5720f350"
};


const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);