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
});
