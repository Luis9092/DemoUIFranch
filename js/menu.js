document.addEventListener("DOMContentLoaded", function () {
  console.log("hola");
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav  ul");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("activo");
    menuToggle.querySelector("i").classList.toggle("fa-bars");
    menuToggle.querySelector("i").classList.toggle("fa-times");
  });

  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("activo");

      menuToggle.querySelector("i").classList.add("fa-bars");
      menuToggle.querySelector("i").classList.remove("fa-times");
    });
  });
});

const body = document.body;

const modeToggle = body.querySelector("#toggle-switch");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
  body.setAttribute("data-theme", "dark");
  modeToggle.classList.toggle("active");
}

modeToggle.addEventListener("click", (e) => {
  modeToggle.classList.toggle("active"); // Cambié 'e' por 'element' para toggle

  if (body.getAttribute("data-theme") === "dark") {
    body.removeAttribute("data-theme");
    localStorage.setItem("mode", "light");
  } else {
    body.setAttribute("data-theme", "dark");
    localStorage.setItem("mode", "dark");
  }
});
let colorChange = "#0080e8";
// spectrum patronus
$("#btnColor").spectrum({
  color: "#f00",
  showPalette: false,
  showAlpha: true,
  showButtons: false,
});



var styleElement = document.createElement("style");
styleElement.rel = "stylesheet";
styleElement.href = "css/elementos.css";
document.head.appendChild(styleElement);

$("#btnColor").on("dragstop.spectrum", function (e, color) {
  styleElement.textContent = `
    :root {
  --primary-color: ${color.toHexString()} !important;
}`;


  colorChange = color.toHexString();
 localStorage.setItem("colorPrincipal", colorChange)

});

const colorPrincipal = localStorage.getItem("colorPrincipal");

if(colorPrincipal){
 // Cambiar el valor de la variable CSS
  document.documentElement.style.setProperty(
    "--primary-color",
    `${colorPrincipal}`,
  );
}
 