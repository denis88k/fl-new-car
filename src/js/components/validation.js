import './../vendor/inputMask.js';
import JustValidate from 'just-validate';

// formSelector --- класс формы

const validateForms = form => {
  const inputTel = form?.querySelector('input[type="tel"]');

  if (inputTel) {
    const inputMask = new Inputmask('+7 (999) 999 - 99 - 99');
    inputMask.mask(inputTel);
  }

  const validation = new JustValidate(form);

  validation
    .addField('.input__tel', [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Телефон обязателен!',
      },
      {
        rule: 'function',
        validator: function () {
          const phone = inputTel.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: 'Введите корректный телефон!',
      },
    ])
    .addField('.input__name', [
      {
        rule: 'minLength',
        value: 3,
      },
      {
        rule: 'maxLength',
        value: 30,
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите имя!',
      },
    ])
    .onSuccess(event => {
      console.log('Validation passes and form submitted', event);
      event.target.reset();
      // при удачной валидации модальное окно закрывается
      document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.contains('active') && modal.classList.remove('active') && body.classList.remove('_lock');
      });

      const body = document.body;
      const modal = document.querySelector('.modal-sendForm');
      const btnClose = document.querySelector('.modal-sendForm .modal__close');

      body.classList.add('_lock');
      modal.classList.add('active');

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
      setTimeout(() => {
        body.classList.remove('_lock');
        modal.classList.remove('active');
      }, 5000);
    });
};

export default validateForms;
