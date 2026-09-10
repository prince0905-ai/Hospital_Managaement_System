/* =====================================================
   HERO SLIDER
===================================================== */

const slides = document.getElementById("slides");

const slideItems = document.querySelectorAll(".slide");

const dots = document.querySelectorAll(".dot");

const nextButton = document.getElementById("nextButton");

const prevButton = document.getElementById("prevButton");

const slider = document.getElementById("slider");

let currentSlide = 0;

let autoSlideTimer;


/* =====================================================
   SHOW SLIDE
===================================================== */

function showSlide(index) {

    if (index >= slideItems.length) {
        currentSlide = 0;
    }

    else if (index < 0) {
        currentSlide = slideItems.length - 1;
    }

    else {
        currentSlide = index;
    }


    slides.style.transform =
        `translateX(-${currentSlide * 100}%)`;


    dots.forEach((dot, i) => {

        dot.classList.toggle(
            "active",
            i === currentSlide
        );

    });

}


/* =====================================================
   NEXT SLIDE
===================================================== */

function nextSlide() {

    showSlide(currentSlide + 1);

}


/* =====================================================
   PREVIOUS SLIDE
===================================================== */

function previousSlide() {

    showSlide(currentSlide - 1);

}


/* =====================================================
   BUTTON EVENTS
===================================================== */

nextButton.addEventListener(
    "click",
    nextSlide
);


prevButton.addEventListener(
    "click",
    previousSlide
);


/* =====================================================
   DOT EVENTS
===================================================== */

dots.forEach((dot) => {

    dot.addEventListener("click", () => {

        const slideIndex =
            Number(dot.dataset.slide);

        showSlide(slideIndex);

    });

});


/* =====================================================
   AUTO SLIDER
===================================================== */

function startAutoSlide() {

    autoSlideTimer = setInterval(() => {

        nextSlide();

    }, 5000);

}


function stopAutoSlide() {

    clearInterval(autoSlideTimer);

}


/* =====================================================
   PAUSE SLIDER ON HOVER
===================================================== */

slider.addEventListener(
    "mouseenter",
    stopAutoSlide
);

slider.addEventListener(
    "mouseleave",
    startAutoSlide
);


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.getElementById("menuButton");


const navMenu =
    document.querySelector(".nav-menu");


menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("mobile-active");

});


/* =====================================================
   INITIALIZE
===================================================== */

showSlide(0);

startAutoSlide();