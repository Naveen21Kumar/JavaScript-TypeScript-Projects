// 'use strict';

const buttons = document.querySelectorAll<HTMLButtonElement>('.show-modal');
const modal = document.querySelector<HTMLDivElement>('.modal');
const overlay = document.querySelector<HTMLDivElement>('.overlay');

if (!modal || !overlay) {
  throw new Error('Missing modal or overlay element');
}

const closeModal = (): void => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = (): void => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

buttons.forEach(btn => {
  btn.addEventListener('click', openModal);
});

document
  .querySelector<HTMLButtonElement>('.close-modal')
  ?.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
