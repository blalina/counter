const counterIncrementButton = document.querySelector('.js-increment__button');
const counterDecrementButton = document.querySelector('.js-decrement__button');
const counterResetButton = document.querySelector('.js-reset__button');

const counterInput = document.querySelector('.counter__input');

counterIncrementButton.addEventListener('click', () => {
  counterInput.value = Number(counterInput.value) + 1;
});

counterDecrementButton.addEventListener('click', () => {
  counterInput.value = Number(counterInput.value) - 1;
});

counterResetButton.addEventListener('click', () => {
  counterInput.value = 0;
});
