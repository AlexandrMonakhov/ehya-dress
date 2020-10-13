const testimonial = new Swiper('.testimonial-slider', {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const slides = document.querySelectorAll(".history-slide"),
  prev = document.querySelector(".history__button--prev"),
  next = document.querySelector(".history__button--next");
let slideIndex = 1;

const showSlide = (n) => {
  slideIndex = n > slides.length ? 1 : n < 1 ? slides.length : slideIndex

  slides.forEach((slide, index) => {
    index === slideIndex - 1
      ? slide.classList.add("history-slide--active")
      : slide.classList.remove("history-slide--active");
  });
};
const setSlide = (n) => {
  showSlide((slideIndex += n));
};
showSlide(slideIndex);

prev.addEventListener("click", () => setSlide(-1));
next.addEventListener("click", () => setSlide(1));