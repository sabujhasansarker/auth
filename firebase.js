import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let app;
app =
  !firebase.apps.length &&
  firebase.initializeApp({
    apiKey: "AIzaSyBciy8FXTvsqxkQnzhwFkjY6N3PN-uXz5o",
    authDomain: "gauth-govt.firebaseapp.com",
    databaseURL: "https://gauth-govt-default-rtdb.firebaseio.com",
    projectId: "gauth-govt",
    storageBucket: "gauth-govt.appspot.com",
    messagingSenderId: "160157610561",
    appId: "1:160157610561:web:7c35701844f9f2287e0cc0",
    measurementId: "G-87F80KM6Z5",
  });

export const auth = app && app.auth();

// for google authentication
export const google = new firebase.auth.GoogleAuthProvider();

// for github authentication
export const github = new firebase.auth.GithubAuthProvider();

// Export app with firebase config
export default app;
