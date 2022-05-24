const name = document.getElementById("name");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("conf-password");
const phone = document.getElementById("phone");
const date = document.getElementById("date");
const time = document.getElementById("time");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

let upperPass = password.value.toUpperCase();
let counter = 0;

for (let i = 0; i < password.value.length; i++) {
  if (password[i] === upperPass[i]) {
    counter++;
  }
}

form.addEventListener("submit", (e) => {
  let messages = [];

  if (name.value.length < 2) {
    messages.push("Name is too short!");
  }
  if (password.value.length <= 6) {
    messages.push("Passowrd must be longer than 6 characters!");
  }
  if (counter == 0) {
    //think of a solution for upper case password
    messages.push("Password must contain uppercase letter!");
  }
  if (password.value != confirmPassword.value) {
    messages.push("Confirmed password does match the original");
  }
  if (!isValidEmail(email.value.trim())) {
    messages.push("Enter a valid email!");
  }
  if (phone.value.length > 10 || phone.value.length < 10) {
    messages.push("Phone number must be 10 digits long");
  }
  if (/^\d+$/.test(phone.value) == false) {
    messages.push("Phone must be only digits!");
  }
  if (date.value.length === 0) {
    messages.push("You must enter a date!");
  }
  if (time.value.length === 0) {
    messages.push("You must enter specific time!");
  }

  if (messages.length > 0) {
    e.preventDefault(); //ne pozvolqva na stranicata da submitnesh
    errorElement.innerText = messages.join(" \n");
  }
});

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
