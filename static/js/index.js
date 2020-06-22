'use strict';


/*
 * Handles mobile nav
 */

function toggleMobileNavState() {
  var body = document.querySelector('body');
  body.classList.toggle('nav--active');
}

/*
 * Initializes burger functionality
 */

function initBurger() {
  var burger = document.querySelector('.burger');
  burger.addEventListener('click', toggleMobileNavState);
}

initBurger();

var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

function fn() {
  let visited="true"==localStorage.getItem("visited");
  if (visited) {
    window.location.pathname="\\blog";
  } else {
    window.location.pathname="\\";
  }
  localStorage.setItem("visited", "true");
}

// document.addEventListener('DOMContentLoaded', fn, false);

