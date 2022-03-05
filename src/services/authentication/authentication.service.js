import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const registerRequest = (email, password, confirmPassword) =>
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password, confirmPassword);

export const logoutRequest = () => firebase.auth().signOut();
