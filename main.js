// ==== Navbar Toggle ====
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ==== Scroll Reveal Effect ====
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Header Reveal
ScrollReveal().reveal(".header__container .section__subheader", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// Room Reveal
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 300,
});

// Feature Reveal
ScrollReveal().reveal(".feature__card", {
  ...scrollRevealOption,
  interval: 300,
});

// News Reveal
ScrollReveal().reveal(".news__card", {
  ...scrollRevealOption,
  interval: 300,
});

// ==== Booking Form Validation ====
const bookingForm = document.querySelector("form");
const inputs = bookingForm.querySelectorAll("input");

bookingForm.addEventListener("submit", (e) => {
  let hasError = false;

  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      input.style.borderBottom = "2px solid red";
      hasError = true;
    } else {
      input.style.borderBottom = "1px solid #ccc";
    }
  });

  if (hasError) {
    e.preventDefault();
    alert("Please fill out all booking details!");
  }
});
