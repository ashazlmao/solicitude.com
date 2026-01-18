//Navbar
document.addEventListener("DOMContentLoaded", () => {
const navbar = document.querySelector(".navbar");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", () => {
    navbar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navbar.classList.remove("active");
});
});  