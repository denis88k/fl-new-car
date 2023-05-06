// муссорка
// // const sectionPromoFooter = document.querySelector('.section__promo-footer');
// const chat = document.querySelector('.chat ');

// // const sectionPromoFooterHeight = sectionPromoFooter.getBoundingClientRect().top;
// const chatHeight = chat.getBoundingClientRect().bottom;
// console.log(chatHeight);

// const wrapper = document.querySelector('.wrapper');
// wrapper.style.cssText = ` max-height: ${chatHeight}px`;

// chatLogic(0, '.chat__car-card', '.car__card-block', 'car');
// chatLogic(1, '.chat__equipment', '.equipment__block', 'equipment');
// chatLogic(1, 'equipment');

// const test = document.querySelector('.chat-messages[data-question="0"]');
// console.log(test);

// const question = document.querySelector('.chat-messages'); // определяем
// const msgBlocks = question.querySelectorAll('.chat__message-block');

// msgBlocks.forEach((msgBlock, index) => {
//   const msgPrint = msgBlock.querySelector('.chat__message-print');
//   const msgConsult = msgBlock.querySelector('.chat__message-consultant');
//   setTimeout(() => {
//     setTimeout(() => {
//       !msgPrint.classList.contains('msg-print-show') && msgPrint.classList.add('msg-print-show');
//     }, 725);

//     setTimeout(() => {
//       msgPrint.classList.remove('msg-print-show');
//       msgConsult.classList.add('msg-show');
//     }, 2500);
//   }, index * 2500);
// });

// const msgBlocksChoice = question.querySelector('.chat__car-card'); // определяем

// setTimeout(() => {
//   msgBlocksChoice.classList.add('msg-show');
// }, 2500 * msgBlocks.length + 950);

// // блоки за которыми нужно следить
// const blocksChoice = msgBlocksChoice.querySelectorAll('.car__card-block'); //определяем
// const msgAnswer = question.querySelector('.chat__message-client');

// blocksChoice.forEach(block => {
//   block.addEventListener('click', e => {
//     // console.log(e.currentTarget.dataset.car);
//     msgAnswer.classList.add('msg-show');
//     msgAnswer.innerHTML = `${e.currentTarget.dataset.car}`;
//   });
// });
