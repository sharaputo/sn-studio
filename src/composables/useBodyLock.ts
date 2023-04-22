export const lockBody = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  document.body.classList.add('locked');
};

export const unlockBody = () => {
  document.body.classList.remove('locked');
};
