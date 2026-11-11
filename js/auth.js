import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { Logger } from "./logger.js";

export async function register(email, password, role) {
  const credential = await createUserWithEmailAndPassword(auth, email, password);
  Logger.log("USER_REGISTERED", credential.user.uid, { role });
  return credential;
}

export async function login(email, password) {
  const credential = await signInWithEmailAndPassword(auth, email, password);
  Logger.log("USER_LOGGED_IN", credential.user.uid);
  return credential;
}
