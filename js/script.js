const menuButton = document.querySelector(".cp-menu-toggle");
const mobileMenu = document.querySelector(".cp-mobile-menu");
const mobileOverlay = document.querySelector(".cp-mobile-overlay");
const mobileClose = document.querySelector(".cp-mobile-close");

function openMenu() {
    mobileMenu.classList.add("active");
    mobileOverlay.classList.add("active");
    document.body.classList.add("menu-open");
    menuButton.style.display = "none";
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    mobileMenu.classList.remove("active");
    mobileOverlay.classList.remove("active");
    document.body.classList.remove("menu-open");
    menuButton.style.display = "block";
    document.body.style.overflow = "";
}

menuButton.addEventListener("click", openMenu);
mobileClose.addEventListener("click", closeMenu);
mobileOverlay.addEventListener("click", closeMenu);