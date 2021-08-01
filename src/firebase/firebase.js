import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
	//Obj firebase
    apiKey: "AIzaSyBj5z4FVkZA5Me0MGbcfGUwxb2aYy5cc-k",
    authDomain: "react-wine-store.firebaseapp.com",
    projectId: "react-wine-store",
    storageBucket: "react-wine-store.appspot.com",
    messagingSenderId: "481764024978",
    appId: "1:481764024978:web:8b43c5058e9d8ca53ebc4b"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
 return app;
}

export const database = firebase.firestore(); //es lo que luego importaremos

