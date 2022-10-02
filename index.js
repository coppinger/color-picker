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

function copySelected(event) {
  navigator.clipboard.writeText(event.target.innerHTML);
}

let colorP = document.querySelectorAll(".color-p");

function setPickedColor() {
  getColors();
  colorPicker.addEventListener("input", updatePickedColor, false);
  modePicker.addEventListener("input", updatePickedMode, false);
  for (let i = 0; i < colorP.length; i++) {
    colorP[i].addEventListener("click", copySelected, false);
  }
}

window.addEventListener("load", setPickedColor, false);

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
