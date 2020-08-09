const toggleButton  = document.getElementsByClassName("toggle-button")[0];
const navbarLinks   = document.getElementsByClassName("navbar-links")[0];
const hamburgerIcon = document.querySelector("#hamburger-icon");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});