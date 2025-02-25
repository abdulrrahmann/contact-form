let myForm = document.querySelector(".container form");
let fName = document.getElementById("fname");
let lName = document.getElementById("lname");
let email = document.getElementById("email");
let radioOne = document.getElementById("generalEnq");
let radioTwo = document.getElementById("supportRe");
let queryControl = document.querySelector(".query-control");
let message = document.getElementById("message");
let check = document.getElementById("check");
let notification = document.querySelector(".notification");
let success = false;
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  success = true;
  // Validate Name
  if (!fName.value) {
    fName.classList.add("error");
    document.querySelector(`#fname + span`).classList.remove("d-none");
    success = false;
  }

  if (!lName.value) {
    lName.classList.add("error");
    document.querySelector(`#lname + span`).classList.remove("d-none");
    success = false;
  }

  // Validate Email
  let pattern = /^\w+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/;
  if (!pattern.test(email.value) && email.value !== "") {
    email.classList.add("error");
    document.querySelector("#email + span.error").classList.remove("d-none");
    success = false;
  } else if (email.value == "") {
    email.classList.add("error");
    document.querySelector("#email ~ span.info").classList.remove("d-none");
    success = false;
  }

  // Validate Radio
  if (!radioOne.checked && !radioTwo.checked) {
    queryControl.querySelector("span.info").classList.remove("d-none");
    success = false;
  }

  // Validate Message
  if (!message.value) {
    message.classList.add("error");
    document.querySelector("#message + span").classList.remove("d-none");
    success = false;
  }

  // Validate Check
  if (!check.checked) {
    document.querySelector("#check ~ span").classList.remove("d-none");
    success = false;
  }

  if (success) {
    notification.classList.remove("d-none");

    setTimeout(() => {
      notification.classList.add("d-none");
    }, 3000);
  }
});

myForm.addEventListener("change", (e) => {
  // Reset classes
  fName.classList.remove("error");
  lName.classList.remove("error");
  email.classList.remove("error");
  message.classList.remove("error");

  document.querySelector(`#fname + span`).classList.add("d-none");
  document.querySelector(`#lname + span`).classList.add("d-none");
  document.querySelector(`#email + span.error`).classList.add("d-none");
  document.querySelector(`#email ~ span.info`).classList.add("d-none");
  document.querySelector(`#message + span`).classList.add("d-none");
  queryControl.querySelector("span.info").classList.add("d-none");
  document.querySelector("#check ~ span").classList.add("d-none");
});
