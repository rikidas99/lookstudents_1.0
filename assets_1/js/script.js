'use strict';



/**
 * add event on element
 */

const addEventOnElement = function (element, type, listener) {
  if (element.length > 1) {
    for (let i = 0; i < element.length; i++) {
      element[i].addEventListener(type, listener);
    }
  } else {
    element.addEventListener(type, listener);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
}

addEventOnElement(navToggler, "click", toggleNav);


const closeNav = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElement(navLinks, "click", closeNav);



/**
 * add active class on header & back to top button
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * hero tab button
 */

const tabBtns = document.querySelectorAll("[data-tab-btn]");

let lastClickedTabBtn = tabBtns[0];

const changeTab = function () {
  lastClickedTabBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedTabBtn = this;
}

addEventOnElement(tabBtns, "click", changeTab);








// image slider

const gallery = document.querySelector('.image-gallery');
const images = document.querySelectorAll('.image-item');
const totalImages = images.length;
let scrollPosition = 0;
const imageWidth = 220; // Adjust based on your CSS
const scrollInterval = 3000; // Change image every 3 seconds

function slideImages() {
  scrollPosition += imageWidth; // Move to the next image
  if (scrollPosition >= totalImages * imageWidth) {
    scrollPosition = 0; // Reset to the start
  }
  gallery.style.transform = `translateX(-${scrollPosition}px)`;
}

setInterval(slideImages, scrollInterval);







const menuBtn = document.getElementById('menuBtn');
const fabOptions = document.querySelector('.fab');

menuBtn.addEventListener('click', () => {
  fabOptions.classList.toggle('active'); // Toggle visibility of action buttons
});