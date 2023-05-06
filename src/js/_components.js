import modal from './components/modal.js';

// promo-header
modal('.promo__header-modal-payment', '.modal-payment', '.modal-payment .modal__close');
modal('.promo__header-modal-tradIn', '.modal-tradIn', '.modal-tradIn .modal__close');

// promo-actual
modal('.promo__header-modal-discount', '.modal-discount', '.modal-discount .modal__close');
modal('.promo__header-modal-tiresСasco', '.modal-tiresСasco', '.modal-tiresСasco .modal__close');
modal('.promo__header-modal-bestPrice', '.modal-bestPrice', '.modal-bestPrice .modal__close');

import validateForms from './components/validation.js';

document.querySelectorAll('.form').forEach(form => {
  validateForms(form);
});
