import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { Logger } from "./logger.js";

export async function addTeacher(data) {
  const ref = await addDoc(collection(db, "teachers"), data);
  Logger.log("TEACHER_ADDED", "ADMIN", { id: ref.id });
  return ref;
}

window.addTeacherUI = async function () {
  const name = document.getElementById("name").value.trim();
  const dept = document.getElementById("dept").value.trim();
  const subject = document.getElementById("subject").value.trim();

  if (!name || !dept || !subject) {
    alert("Please fill in all teacher details.");
    return;
  }

  try {
    await addTeacher({ name, dept, subject });
    alert("Teacher added successfully.");
    document.getElementById("name").value = "";
    document.getElementById("dept").value = "";
    document.getElementById("subject").value = "";
  } catch (error) {
    console.error(error);
    alert("Could not add teacher. Check Firebase configuration and permissions.");
  }
};
