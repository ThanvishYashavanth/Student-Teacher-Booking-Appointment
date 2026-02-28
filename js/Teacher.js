import { auth, db } from "./firebase.js";

import {
collection,
query,
where,
onSnapshot,
updateDoc,
doc
}
from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { login } from "./auth.js";
import { Logger } from "./logger.js";
let currentTeacherId = null;


// LOGIN TEACHER

window.loginTeacher = async function () {
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const userCredential = await login(email, password);
currentTeacherId = userCredential.user.uid;
Logger.log("TEACHER_LOGIN", currentTeacherId);
loadAppointments();
};


// LOAD APPOINTMENTS REALTIME

function loadAppointments(){
const list = document.getElementById("appointmentList");
list.innerHTML="Loading...";
const q = query(
collection(db,"appointments"),
where("teacherId","==",currentTeacherId)
);

onSnapshot(q,(snapshot)=>{
list.innerHTML="";

snapshot.forEach((docSnap)=>{
const data = docSnap.data();
const li = document.createElement("li");

li.innerHTML = `
ID: ${docSnap.id} <br>
Time: ${data.time} <br>
Message: ${data.message} <br>
Status: ${data.status}
`;

li.onclick = () => {
document.getElementById("appointmentId").value = docSnap.id;
};

list.appendChild(li);
});
Logger.log("APPOINTMENTS_LOADED",currentTeacherId);
});
}


// APPROVE

window.approve = async function(){
const id=document.getElementById("appointmentId").value;
await updateDoc(doc(db,"appointments",id),{
status:"APPROVED"
});
Logger.log("APPOINTMENT_APPROVED",currentTeacherId,{id});
};


// REJECT

window.reject = async function(){
const id=document.getElementById("appointmentId").value;
await updateDoc(doc(db,"appointments",id),{
status:"REJECTED"
});
Logger.log("APPOINTMENT_REJECTED",currentTeacherId,{id});
};