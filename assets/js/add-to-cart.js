function addedToCart(key) {
  var rightbtn = document.querySelector("#top-right-btn");

  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", "[]");
  }

  if (!check()) {
    location = "login.html";
  }

  var data = JSON.parse(localStorage.getItem("cart"));
  var new_data = [key, ...data];
  localStorage.setItem("cart", JSON.stringify(new_data));

  var orders_len = JSON.parse(localStorage.getItem("cart")).length;
  rightbtn.innerHTML = `Cart <div id='badge'>${orders_len}</div>`;
}
function ToDetail(id) {
  localStorage.setItem("ProductID", id);
}

function check() {
  var user_2 = localStorage.getItem("username");
  var pwd_2 = localStorage.getItem("password");
  if (user_2 && user_2 != "" && pwd_2 && pwd_2 != "") {
    return true;
  } else {
    return false;
  }
}
