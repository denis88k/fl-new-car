import JustValidate from 'just-validate';
import './../vendor/inputMask.js';

// formSelector --- класс формы

const validateForms = form => {
  const inputTel = form?.querySelector('input[type="tel"]');

  if (inputTel) {
    const inputMask = new Inputmask('+7 (999) 999 - 99 - 99');
    inputMask.mask(inputTel);
  }

  const validation = new JustValidate(
    form,
    // { validateBeforeSubmitting: true }
  );

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
        errorMessage: 'Впишите не менее 3 букв',
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Впишите не более 30 букв',
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите имя!',
      },
    ])
    .onSuccess(event => {
      // console.log('Validation passes and form submitted', event);
      event.target.reset();
      // console.log(event.target, 'event');

      document.querySelectorAll('.form').forEach(form => {
        form.querySelectorAll('.form__input').forEach(input => {
          input.classList.contains('just-validate-error-field') && input.classList.remove('just-validate-error-field');
          input.classList.contains('just-validate-success-field') && input.classList.remove('just-validate-success-field');
        });
      });

      // this.classList.contains('just-validate-error-field') && this.classList.remove('just-validate-error-field');
      // this.classList.contains('just-validate-success-field') && this.classList.remove('just-validate-success-field');

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

// .refresh()
export default validateForms;
