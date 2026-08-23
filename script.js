// ===== Ерөнхий скрипт: мобайл цэс + эцэг эхийн порталын демо =====

// Google Translate виджет эхлүүлэх (global байх ёстой)
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "mn", includedLanguages: "en,mn", autoDisplay: false },
    "google_translate_element"
  );
}

document.addEventListener("DOMContentLoaded", function () {
  // Хэл солих туг товч
  var langBtn = document.getElementById("lang-toggle-btn");
  if (langBtn) {
    langBtn.addEventListener("click", function () {
      var select = document.querySelector(".goog-te-combo");
      if (!select) {
        alert("Орчуулгын үйлчилгээ ачаалж байна, түр хүлээгээд дахин дарна уу.");
        return;
      }
      select.value = select.value !== "en" ? "en" : "mn";
      select.dispatchEvent(new Event("change"));
    });
  }

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
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
