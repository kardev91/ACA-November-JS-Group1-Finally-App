import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAYRNfPBy3Yc6i5sh9ZB5v8gClPNZ-MtzA",
    authDomain: "aca-js-group1-final-app.firebaseapp.com",
    projectId: "aca-js-group1-final-app",
    storageBucket: "aca-js-group1-final-app.appspot.com",
    messagingSenderId: "978669303974",
    appId: "1:978669303974:web:2cde3fab97e2d81e605c67"

})

export const auth = app.auth()
export default app
