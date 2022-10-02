let pickedColor = "0047AB";
let colorPicker = document.querySelector("input");

let colorP = document.querySelectorAll(".color-p");

function getColors() {
  fetch(`https://www.thecolorapi.com/scheme?hex=${pickedColor}`)
    .then((res) => res.json())
    .then((json) => {
      for (let i = 0; i < json.colors.length; i++) {
        colorP[i].innerHTML = json.colors[i].hex.value;
        colorP[i].parentElement.parentElement.style.background =
          json.colors[i].hex.value;
      }
    });
}
