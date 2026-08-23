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

  // Hero stats - count-up animation
  var counters = document.querySelectorAll(".hero-stats strong[data-count]");
  if (counters.length) {
    var animateCounter = function (el) {
      var target = parseInt(el.getAttribute("data-count"), 10) || 0;
      var duration = 1400;
      var startTime = null;
      var step = function (timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var value = Math.floor(eased * target);
        el.textContent = value.toLocaleString("en-US");
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target.toLocaleString("en-US");
        }
      };
      requestAnimationFrame(step);
    };

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      counters.forEach(function (el) { observer.observe(el); });
    } else {
      counters.forEach(function (el) { animateCounter(el); });
    }
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
