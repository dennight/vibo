"use strict";

// Бургер-меню
let hamburger = document.querySelector(".hamburger");
let navbar = document.querySelector(".navbar");
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    navbar.classList.toggle("is-open");
});

// Изменение фона меню во время прокрутки страниці

let lastScrollTop = 0;
window.addEventListener(
    "scroll",
    function () {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            document.getElementById("nav").classList.add("scrolled");
        } else {
            document.getElementById("nav").classList.remove("scrolled");
        }
        lastScrollTop = st <= 0 ? 0 : st; 
    },
    false
);