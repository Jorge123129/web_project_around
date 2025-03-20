const openModal    = document.querySelector('.profile__edit-button');
const popup        = document.querySelector('.popup');
const closePopup   = document.querySelector('.popup__close-button');
const guardarPopup = document.querySelector('.popup__form');
const overlay      = document.querySelector('.overlay');

openModal.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.add('popup--show');
        overlay.classList.add('overlay--show');
});

closePopup.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.remove('popup--show');
        overlay.classList.remove('overlay--show');
});

guardarPopup.addEventListener('submit', (e) => {
    e.preventDefault();
    popup.classList.remove('popup--show');
        overlay.classList.remove('overlay--show');
});

overlay.addEventListener('click', (e) => {
    popup.classList.remove('popup--show');
    overlay.classList.remove('overlay--show');
});

