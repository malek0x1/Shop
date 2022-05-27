import User from "./user.js";

var obj = new User("", "", "");
var check = obj.isLoggedin();

var search_inp = document.querySelector("#search");
var rightbtn = document.querySelector("#top-right-btn");
function show() {}

var section = document.querySelector("section");
function drawIU(array) {
  section.innerHTML = "";
  array.map((item) => {
    section.innerHTML += `<div class="box" onclick="ToDetail(${item.key});">
    <div class="image" ">
      <a  href="detail.html">
        <img
          src="${item.image}"
          alt=""
        />
      </a>
    </div>
    <div class="product-body">
      <h2>${item.name}</h2>
      <p>${item.price}</p>
      
      <button class="add-to-cart" onclick="addedToCart(${item.key});">Add To Cart</button>

    </div>
  </div>`;
  });
}

function Fetch() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "data.json", false);
  xhttp.send();

  var arr = JSON.parse(xhttp.responseText);
  drawIU(arr);
}

Fetch();

search_inp.addEventListener("keyup", search);

function search(e) {
  var query = e.target.value;

  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "data.json", false);
  xhttp.send();

  var arr = JSON.parse(xhttp.responseText);

  var arr2 = arr.filter(
    (item) =>
      item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) != -1
  );
  drawIU(arr2);
}

if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", "[]");
}

var orders_len = JSON.parse(localStorage.getItem("cart")).length;
rightbtn.innerHTML = `Cart <div id='badge'>${orders_len}</div>`;

rightbtn.addEventListener("click", (e) => (window.location = "cart.html"));

if (!check) {
  rightbtn.innerHTML = "Login";
  rightbtn.style.paddingRight = "10px";

  rightbtn.addEventListener("click", function x() {
    location = "login.html";
  });
}

if (!localStorage.getItem("allproducts")) {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "data.json", false);
  xhttp.send();

  var arr = JSON.parse(xhttp.responseText);
  localStorage.setItem("allproducts", JSON.stringify(arr));
}
