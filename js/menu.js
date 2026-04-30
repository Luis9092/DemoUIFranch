document.addEventListener("DOMContentLoaded",function(){
console.log("hola");
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav  ul");

menuToggle.addEventListener("click", function(){
navMenu.classList.add("activo");
menuToggle.querySelector("i").classList.toggle("fa-bars");
menuToggle.querySelector("i").classList.toggle("fa-times");
});



document.querySelectorAll("nav a").forEach(link =>{
    link.addEventListener("click", function(){
        navMenu.classList.remove("activo");

        menuToggle.querySelector("i").classList.add("fa-bars")
        menuToggle.querySelector("i").classList.remove("fa-times")
    })
})

});