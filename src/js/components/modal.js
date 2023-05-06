const modal = (btnOpen, modal, btnClose) => {
  btnOpen = document.querySelector(btnOpen);
  modal = document.querySelector(modal);
  btnClose = document.querySelector(btnClose);
  const body = document.body;

  btnOpen.addEventListener('click', e => {
    e.preventDefault();
    body.classList.add('_lock');
    modal.classList.add('active');
  });

  btnClose.addEventListener('click', () => {
    body.classList.remove('_lock');
    modal.classList.remove('active');
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      body.classList.remove('_lock');
      modal.classList.remove('active');
    }
  });
};
// btnOpen --- класс кнопки, при клике на которую будет ОТКРЫВАТЬСЯ модальное окно
// modal --- класс открываемого модального окна
// btnClose --- класс кнопки, при клике на которую будет ЗАКРЫВАТЬСЯ модальное окно
export default modal;
