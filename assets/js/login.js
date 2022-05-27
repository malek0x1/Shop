import User from "./user.js";
var regbtn = document.querySelector("#submit");
var username_input = document.querySelector(".username");
var password_input = document.querySelector(".password");

regbtn.addEventListener("click", login);

function login(e) {
  e.preventDefault();
  var obj = new User("malek", username_input.value, password_input.value);
  var checkuser = obj.ValidateLogin();
  if (checkuser) {
    setTimeout(() => {
      window.location = "index.html";
    }, 1000);
  } else {
    alert("wrong Creds");
  }
}
