import { register, login } from "./auth.js";
import { bookAppointment } from "./booking.js";

window.registerStudent = async function () {

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

await register(email, password, "student");

alert("Registered");

}

window.loginStudent = async function () {

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

await login(email, password);

alert("Logged in");

}

window.book = async function () {

const teacher = document.getElementById("teacherSearch").value;
const time = document.getElementById("appointmentTime").value;
const message = document.getElementById("message").value;

await bookAppointment({

teacherId: teacher,
time: time,
message: message,
studentId: "TEMP_ID"

});

alert("Appointment booked");

}