let pickedColor = "0047AB";
let pickedMode = "monochrome";

let colorPicker = document.querySelector("input");
let modePicker = document.querySelector("select");

function updatePickedColor(event) {
  pickedColor = event.target.value.slice(1);
}

function updatePickedMode(event) {
  pickedMode = event.target.value;
}

function setPickedColor() {
  getColors();
  colorPicker.addEventListener("input", updatePickedColor, false);
  modePicker.addEventListener("input", updatePickedMode, false);
}

window.addEventListener("load", setPickedColor, false);

let colorP = document.querySelectorAll(".color-p");

function getColors() {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${pickedColor}&mode=${pickedMode}`
  )
    .then((res) => res.json())
    .then((json) => {
      for (let i = 0; i < json.colors.length; i++) {
        colorP[i].innerHTML = json.colors[i].hex.value;
        colorP[i].parentElement.parentElement.style.background =
          json.colors[i].hex.value;
      }
    });
}
