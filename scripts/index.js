const openModal = document.querySelector('.profile__edit-button');
const popup     = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close-button');
const guardarPopup = document.querySelector('.popup__form');

openModal.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.add('popup--show');
});

closePopup.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.remove('popup--show');
});

guardarPopup.addEventListener('submit', (e) => {
    e.preventDefault();
    popup.classList.remove('popup--show');
});

