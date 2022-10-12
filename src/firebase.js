import firebase from "firebase/compat/app"
import "firebase/compat/auth"


const firebaseConfig = {
    apiKey: "AIzaSyDL0x58ftIkFsw-ZJ6EkqJi3Fbg2qn8hHk",
    authDomain: "auth-development-10eb2.firebaseapp.com",
    projectId: "auth-development-10eb2",
    storageBucket: "auth-development-10eb2.appspot.com",
    messagingSenderId: "1002326405876",
    appId: "1:1002326405876:web:9cdca8379f181d91eae4a1"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export default app