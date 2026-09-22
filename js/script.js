const menuButton = document.querySelector(".cp-menu-toggle");
const mobileMenu = document.querySelector(".cp-mobile-menu");
const mobileOverlay = document.querySelector(".cp-mobile-overlay");
const mobileClose = document.querySelector(".cp-mobile-close");

function openMenu() {
    if (!mobileMenu || !mobileOverlay || !menuButton) return;
    mobileMenu.classList.add("active");
    mobileOverlay.classList.add("active");
    document.body.classList.add("menu-open");
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    if (!mobileMenu || !mobileOverlay) return;
    mobileMenu.classList.remove("active");
    mobileOverlay.classList.remove("active");
    document.body.classList.remove("menu-open");
    document.body.style.overflow = "";
}

if (menuButton) menuButton.addEventListener("click", openMenu);
if (mobileClose) mobileClose.addEventListener("click", closeMenu);
if (mobileOverlay) mobileOverlay.addEventListener("click", closeMenu);

document.querySelectorAll(".cp-mobile-nav a").forEach(link => {
    link.addEventListener("click", closeMenu);
});
