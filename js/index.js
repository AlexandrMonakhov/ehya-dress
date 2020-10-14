const slides = document.querySelectorAll(".history-slide"),
  prev = document.querySelector(".history__button--prev"),
  next = document.querySelector(".history__button--next"),
  mobileMenuButton = document.querySelector('.menu-mobile__button'),
  mobileMenuClose = document.querySelector('.menu-mobile__close'),
  mobileMenu = document.querySelector('.mobile');
let slideIndex = 1;

const tabsItem = $(".tabs__item");
const contentItem = $(".trends-cards");

tabsItem.on("click", function (event) {
  const activeContent = $(this).attr("data-target");
  tabsItem.removeClass("tabs__item--active");
  contentItem.removeClass("trends-cards--active");
  $(activeContent).addClass("trends-cards--active");
  $(this).addClass("tabs__item--active");
});


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


mobileMenuButton.addEventListener('click', () => mobileMenu.classList.add('mobile--active'));

mobileMenuClose.addEventListener('click', () => mobileMenu.classList.remove('mobile--active'));

prev.addEventListener("click", () => setSlide(-1));
next.addEventListener("click", () => setSlide(1));