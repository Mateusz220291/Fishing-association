const ico = document.querySelector('.burger');
const nav = document.querySelector('nav')

ico.addEventListener("click", function () {
    ico.classList.toggle("active");
    nav.classList.toggle("active");

})