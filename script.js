var color_1 = document.getElementById("right");
var color_2 = document.getElementById("left");
var output = document.getElementById("output");
var body = document.getElementById("gradient");

function logic() {
  body.style.background =
    " linear-gradient(to right," + color_1.value + ", " + color_2.value + ")";
  output.textContent = body.style.background;
}

color_1.addEventListener("input", logic);
color_2.addEventListener("input", logic);
