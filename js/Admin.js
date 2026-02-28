import { db } from "./firebase.js";
import { collection, addDoc, deleteDoc, doc, updateDoc } from 
"https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { Logger } from "./logger.js";

export async function addTeacher(data) {
  const ref = await addDoc(collection(db, "teachers"), data);
  Logger.log("TEACHER_ADDED", "ADMIN", data);
  return ref;
}

export async function deleteTeacher(id) {
  await deleteDoc(doc(db, "teachers", id));
  Logger.log("TEACHER_DELETED", "ADMIN", { id });
}