var productid = localStorage.getItem("ProductID");

var div = document.querySelector(".details");

function drawUI(id) {
  div.innerHTML = "";
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "data.json", false);
  xhttp.send();

  var arr = JSON.parse(xhttp.responseText);
  var out = arr.filter((item) => item.key == id);
  out = out[0];
  div.innerHTML = `
    <div class="img-detail">
          <img
            src="${out.image}"
            alt=""
            srcset=""
            id="p-img"
          />
        </div>
        <div class="info">
          <div class="duo">
            <h1>${out.name}</h1>
            <p class="price">${out.price}</p>
            
          </div>
          <div class="desc">
            <p>
              ${out.desc}   
            </p>
          </div>
          <!----<button>Add To Cart</button>--->
        </div>
      </div>`;
}

drawUI(productid);
