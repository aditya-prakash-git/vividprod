'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

document.addEventListener('DOMContentLoaded', function() {
  const text = "At Vivid Productions, we bring your creative ideas to life with unparalleled precision and flair. Our expert team specializes in delivering stunning visual experiences that captivate and inspire. Let us turn your vision into a vivid reality.";
  const heroText = document.querySelector('.hero-text');
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      heroText.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50); // Adjust typing speed here
    } else {
      heroText.style.borderRight = 'none'; // Remove the cursor when typing is complete
    }
  }

  // Clear the existing text and start the typewriter effect
  heroText.innerHTML = '';
  typeWriter();
});