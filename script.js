const navOverlay = document.querySelector('.nav-overlay');
const navOpenButton = document.querySelector('header svg');
const navCloseButton = document.querySelector('.nav-header svg');

const openNavOverlay = () => {
  navOverlay.classList.remove('hidden');
};

const closeNavOverlay = () => {
  navOverlay.classList.add('hidden');
};

navOpenButton.addEventListener('click', openNavOverlay);
navCloseButton.addEventListener('click', closeNavOverlay);
