var parent = document.querySelector("article");

function DrawUI() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "data.json", false);
  xhttp.send();

  var arr = JSON.parse(xhttp.responseText);
  var orders_keys = JSON.parse(localStorage.getItem("cart"));
  var uniqe_ids = [];

  var dict = {};
  orders_keys.forEach(function (x) {
    dict[x] = (dict[x] || 0) + 1;
  });

  orders_keys.forEach((c) => {
    if (!uniqe_ids.includes(c)) {
      uniqe_ids.push(c);
    }
  });

  var out = uniqe_ids.map((item) => arr.filter((item2) => item === item2.key));
  var output = out.map((p) =>
    p.map(
      (p2) =>
        (parent.innerHTML += `
<div class="details">
<div class="wrapper">
    <div class="img-product-cart">
        <img src="${p2.image}" alt="">
    </div>
    <div class="info">
        <h4>${p2.name}</h4>
        <p style="color:green;margin-top:5px;">${p2.price}</p>
        <p style="margin-top:50px">${p2.desc}</p>
        <b style="margin-top:20px;">x ${dict[p2.key]}</b>
    </div>
</div>
</div>`)
    )
  );
}

DrawUI();
