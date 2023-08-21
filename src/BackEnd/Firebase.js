import firebase from "firebase/compat/app"; // Importe o Firebase compatível
import "firebase/compat/auth"; // Importe os módulos necessários

// Restante do seu código de configuração


const firebaseConfig = {
    apiKey: "AIzaSyBTrpzWpp-LW-9WoIEkRjdSAj3NfNUoeOw",
    authDomain: "didacto-e3c0e.firebaseapp.com",
    projectId: "didacto-e3c0e",
    storageBucket: "didacto-e3c0e.appspot.com",
    messagingSenderId: "32642567618",
    appId: "1:32642567618:web:2c90c56ce551f676585a5b",
    measurementId: "G-VKQBGVGKJQ"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;
