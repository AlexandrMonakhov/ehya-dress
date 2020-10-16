const slides = document.querySelectorAll(".history-slide"),
  prev = document.querySelector(".history__button--prev"),
  next = document.querySelector(".history__button--next"),
  mobileMenuButton = document.querySelector('.menu-mobile__button'),
  mobileMenuClose = document.querySelector('.mobile__close'),
  mobileMenu = document.querySelector('.mobile'),
  modalButton = document.querySelectorAll('[data-toggle=modal]'),
  modalOverlay = document.querySelector('.modal-overlay'),
  modalDialog = document.querySelector('.modal-dialog'),
  closeModalButton = document.querySelector('.modal__close');
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

$(".form").each(function () {
  $(this).validate({
    errorClass: "invalid",
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      email: {
        required: true,
      },
      password: {
        required: true,
        minlength: 8,
      }
    },
    messages: {
      name: {
        required: "Введите ваше имя",
        minlength: "Имя должно быть не меньше 2 символов"
      },
      password: {
        required: "Введите ваш пароль",
        minlength: "Длинна пароля не менее 8 символов"
      },
      email: {
        required: "Введите ваш Email",
        email: "Формат адреса name@domain.com"
      },
    }
  });
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

const openModal = () => {
  modalOverlay.classList.add('modal-overlay_visible');
  modalDialog.classList.add('modal-dialog_visible');
};

const showModal = type => {
  const wearForm = document.querySelector("#clothes");
  const authForm = document.querySelector("#auth");
  console.log(type);

  if (type) {
    authForm.classList.remove("hide");
    wearForm.classList.add("hide");
  } else {
    wearForm.classList.remove("hide");
    authForm.classList.add("hide");
  }
  openModal()
};

const closeModal = () => {
  modalOverlay.classList.remove('modal-overlay_visible');
  modalDialog.classList.remove('modal-dialog_visible');
}

const closeEsc = ({ code }) => {
  if (code === 'Escape') {
    closeModal();
    document.removeEventListener('keydown', closeEsc);
  }
};

const openMenu = () => {
  mobileMenu.classList.add('mobile--active');
}

const closeMenu = () => {
  mobileMenu.classList.remove('mobile--active');
};


mobileMenuButton.addEventListener('click', openMenu);

mobileMenu.addEventListener('click', event => {
  const target = event.target;
  if (target.closest('.mobile__close') || target.closest('.menu-mobile__link')) {
    closeMenu();
  }
});

mobileMenuClose.addEventListener('click', () => closeMenu);

prev.addEventListener("click", () => setSlide(-1));
next.addEventListener("click", () => setSlide(1));


modalButton.forEach(item => {
  item.addEventListener('click', () => {
    showModal(item.dataset.id === 'authBtn');
    document.addEventListener('keydown', closeEsc)
  });
});

closeModalButton.addEventListener('click', () => {
  closeModal();
  document.removeEventListener('keydown', closeEsc);
});