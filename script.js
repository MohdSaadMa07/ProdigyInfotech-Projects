// script.js

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
  
    // Add scroll event to change navbar background color
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    });
  
    // Hover effect for menu items handled in CSS
  });
  