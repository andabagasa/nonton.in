// hide navbar on scroll
let prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;
    const navbar = document.getElementById("navbar");
    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
});

// open and close hamburger
const hamburger = document.querySelector(".hamburger");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const menu = document.querySelector(".hamburger-navigation");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        close.style.display = "none";
        open.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        close.style.display = "block";
        open.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);

// when click menu item in hamburger, auto close menu
const menuItem = document.querySelectorAll(".menu-item");

menuItem.forEach( 
    function(menuItem) { 
        menuItem.addEventListener("click", toggleMenu);
    }
)
