import { db } from "./firebase.js";
import { addDoc, collection } from 
"https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { Logger } from "./logger.js";

export async function bookAppointment(data) {
  const ref = await addDoc(collection(db, "appointments"), {
    ...data,
    status: "PENDING"
  });

  Logger.log("APPOINTMENT_BOOKED", data.studentId, data);
  return ref;
}