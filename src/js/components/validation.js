import './vendor/inp.js';
import './vendor/justValidate.js';

// formSelector - класс формы

export const validateForms = formSelector => {
  const form = document?.querySelector(formSelector);
  const inputTel = form?.querySelector('input[type="tel"]');

  const validation = new JustValidate(form);

  if (inputTel) {
    const inputMask = new Inputmask('+7 (999) 999-99-99');
    inputMask.mask(inputTel);
  }

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
      //   при удачной валидации модальное окно закрывается
      document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.contains('active') && modal.classList.remove('active') && body.classList.remove('_lock');
      });
      // TODO: добавить после модальное окно о том, что оператор перезвонит
    });
};
