// ===== Ерөнхий скрипт: мобайл цэс + эцэг эхийн порталын демо =====

document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  // Contact form (demo - no backend)
  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = document.getElementById("contact-success");
      contactForm.reset();
      if (msg) msg.classList.remove("hidden");
    });
  }

  // Home photo slider (auto rotate)
  var slides = document.querySelectorAll(".photo-slider .slide");
  var dots = document.querySelectorAll(".photo-slider .slider-dots span");
  if (slides.length > 1) {
    var current = 0;
    setInterval(function () {
      slides[current].classList.remove("active");
      if (dots[current]) dots[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
      if (dots[current]) dots[current].classList.add("active");
    }, 4000);
  }
});
