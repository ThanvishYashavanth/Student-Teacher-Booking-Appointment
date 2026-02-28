import { db } from "./firebase.js";
import { updateDoc, doc } from 
"https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { Logger } from "./logger.js";

export async function updateAppointmentStatus(id, status) {
  await updateDoc(doc(db, "appointments", id), { status });
  Logger.log("APPOINTMENT_STATUS_UPDATED", "TEACHER", { id, status });
}