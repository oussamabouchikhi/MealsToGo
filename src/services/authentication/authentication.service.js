import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);
