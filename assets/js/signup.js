import User from "./user.js";
var regbtn = document.querySelector("#submit");
var fullname_input = document.querySelector(".fullname");
var username_input = document.querySelector(".username");
var password_input = document.querySelector(".password");

regbtn.addEventListener("click", register);

function register(e) {
  e.preventDefault();
  var obj = new User(
    fullname_input.value,
    username_input.value,
    password_input.value
  );
  var addusr = obj.AddUser();
}
