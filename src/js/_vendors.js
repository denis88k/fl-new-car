import './vendor/inputMask.js';
const inputMask = new Inputmask('+7 (999) 999-99-99');

const forms = document.querySelectorAll('.form');

forms.forEach(form => {
  const telSelector = form.querySelector('.input__tel');
  inputMask.mask(telSelector);

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
          const phone = telSelector.inputmask.unmaskedvalue();
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
});
