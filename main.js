document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentIndex = 0;
  let interval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = "block";
        slide.style.opacity = "1";
        slide.style.zIndex = "2";
        slide.style.transition = "opacity 1s ease-in-out";
      } else {
        slide.style.opacity = "0";
        slide.style.zIndex = "1";
        setTimeout(() => {
          slide.style.display = "none";
        }, 1000);
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetInterval();
  });

  function startAutoSlide() {
    interval = setInterval(nextSlide, 3000);
  }

  function resetInterval() {
    clearInterval(interval);
    startAutoSlide();
  }

  showSlide(currentIndex);
  startAutoSlide();
});
document.querySelectorAll(".login-btn, .add-to-cart").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const x = e.clientX - e.target.getBoundingClientRect().left;
    const y = e.clientY - e.target.getBoundingClientRect().top;

    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});
