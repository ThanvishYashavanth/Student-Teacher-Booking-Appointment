import { db, auth } from "./firebase.js";
import { addDoc, collection } 
from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { Logger } from "./logger.js";
export async function bookAppointment(data){

const ref = await addDoc(collection(db,"appointments"),{

studentId: auth.currentUser.uid,
teacherId: data.teacherId,
time: data.time,
message: data.message,
status:"PENDING"
});

Logger.log("APPOINTMENT_CREATED",auth.currentUser.uid,{id:ref.id});
}