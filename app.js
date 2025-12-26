const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.onclick = () => {
  mobileMenu.classList.toggle("active");
};
