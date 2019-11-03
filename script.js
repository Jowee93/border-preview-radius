let radius = document.getElementById("radius-box");
let previewer = document.getElementById("previewer");
let verticalSlider = document.getElementsByClassName("vertical-slider");
let horizontalSlider = document.getElementsByClassName("horizontal-slider");

function getRangeValue() {
  changeRadiusValue();
  changeText();
}

for (let i = 0; i < verticalSlider.length; i++) {
  att = document.createAttribute("oninput");
  att.value = `getRangeValue()`;
  verticalSlider[i].setAttributeNode(att);
}

for (let i = 0; i < horizontalSlider.length; i++) {
  att = document.createAttribute("oninput");
  att.value = `getRangeValue()`;
  horizontalSlider[i].setAttributeNode(att);
}

let topSlider = document.getElementById("top-slider");
let bottomSlider = document.getElementById("bottom-slider");
let leftSlider = document.getElementById("left-slider");
let rightSlider = document.getElementById("right-slider");

let a = "50%";
let b = "50%";
let c = "50%";
let d = "50%";
let e = "50%";
let f = "50%";
let g = "50%";
let h = "50%";

function changeRadiusValue() {
  a = `${topSlider.value}%`;
  b = `${100 - topSlider.value}%`;
  c = `${100 - bottomSlider.value}%`;
  d = `${bottomSlider.value}%`;
  e = `${100 - leftSlider.value}%`;
  f = `${leftSlider.value}%`;
  g = `${100 - rightSlider.value}%`;
  h = `${rightSlider.value}%`;

  previewer.style.borderRadius = `${a} ${b} ${c} ${d} / ${e} ${g} ${h} ${f}`;
}

function changeText() {
  radius.value = `${a} ${b} ${c} ${d} / ${e} ${g} ${h} ${f}`;
}

changeText();
previewer.style.borderTopLeftRadius = "50%";
previewer.style.borderTopRightRadius = "50%";
previewer.style.borderBottomLeftRadius = "50%";
previewer.style.borderBottomRightRadius = "50%";

function copyText() {
  let radius = document.getElementById("radius-box");
  radius.select();
  document.execCommand("copy");
  alert("Copied the text: " + radius.value);
}
