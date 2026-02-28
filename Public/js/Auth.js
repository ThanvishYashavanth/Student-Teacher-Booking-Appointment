import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { Logger } from "./logger.js";

export async function register(email, password, role) {
  const user = await createUserWithEmailAndPassword(auth, email, password);
  Logger.log("USER_REGISTERED", user.user.uid, { role });
  return user;
}

export async function login(email, password) {
  const user = await signInWithEmailAndPassword(auth, email, password);
  Logger.log("USER_LOGGED_IN", user.user.uid);
  return user;
}