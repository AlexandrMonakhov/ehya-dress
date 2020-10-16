const mobileMenuButton = document.querySelector('.menu-mobile__button'),
  mobileMenuClose = document.querySelector('.menu-mobile__close'),
  mobileMenu = document.querySelector('.mobile'),
  modalButton = document.querySelectorAll('[data-toggle=modal]'),
  modalOverlay = document.querySelector('.modal-overlay'),
  modalDialog = document.querySelector('.modal-dialog'),
  closeModalButton = document.querySelector('.modal__close');

$(".form").each(function () {
  $(this).validate({
    errorClass: "invalid",
    rules: {
      email: {
        required: true,
      },
      password: {
        required: true,
        minlength: 8,
      }
    },
    messages: {
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

const openModal = () => {
  modalOverlay.classList.add('modal-overlay_visible');
  modalDialog.classList.add('modal-dialog_visible');
};

const showModal = type => {
  const wearForm = document.querySelector("#clothes");
  const authForm = document.querySelector("#auth");

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

mobileMenuButton.addEventListener('click', () => mobileMenu.classList.add('mobile--active'));

mobileMenuClose.addEventListener('click', () => mobileMenu.classList.remove('mobile--active'));

modalButton.forEach(item => {
  item.addEventListener('click', () => {
    showModal(item.id === 'authBtn');
    document.addEventListener('keydown', closeEsc)
  });
});

closeModalButton.addEventListener('click', () => {
  closeModal();
  document.removeEventListener('keydown', closeEsc);
});