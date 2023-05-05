const consultSticky = document.querySelector('.consultant_sticky');
const chatConsultant = document.querySelector('.chat__consultant');
const TopChatConsultant = chatConsultant.getBoundingClientRect().top; // высота до верхней точки страница (не экрана, а СТРАНИЦЫ)
// console.log(TopChatConsultant);
window.addEventListener('scroll', () => {
  // console.log(window.scrollY);
  if (window.scrollY > TopChatConsultant * 1.03) {
    consultSticky.classList.add('show');
  } else {
    consultSticky.classList.contains('show') && consultSticky.classList.remove('show');
  }
});

// прокрутка до определённого сообщения
// https://learn.javascript.ru/size-and-scroll-window
// false - elem внизу
// true - elem вверху
// elem.scrollIntoView(false)

// чат
// необходимые переменные:
// номер чата --- numberChat
// блок с чатом, который определяется от data-chat --- chat
// блок с чатом -> блоки с вопросами
// блок с чатом -> блок с выбором, которое появляется как сообщения чата --- msgBlocksChoiceElement
// блок с выбором -> блоки для выбора --- blockChoiceElement

const chatLogic = (numberChat, msgBlocksChoiceElement, blockChoiceElement) => {
  const chat = document.querySelector(`.chat-messages[data-chat="${numberChat}"]`);
  const msgBlocks = chat.querySelectorAll('.chat__message-block');

  msgBlocks.forEach((msgBlock, index) => {
    const msgPrint = msgBlock.querySelector('.chat__message-print');
    const msgConsult = msgBlock.querySelector('.chat__message-consultant');
    setTimeout(() => {
      setTimeout(() => {
        !msgPrint.classList.contains('msg-print-show') && msgPrint.classList.add('msg-print-show');
      }, 725);

      setTimeout(() => {
        msgPrint.classList.remove('msg-print-show');
        msgConsult.classList.add('msg-show');
      }, 2500);
    }, index * 2500);
  });

  const msgBlocksChoice = chat.querySelector(msgBlocksChoiceElement); // определяем

  setTimeout(() => {
    msgBlocksChoice.classList.add('msg-show');
  }, 2500 * msgBlocks.length + 950);

  // блоки за которыми нужно следить
  const blocksChoice = msgBlocksChoice.querySelectorAll(blockChoiceElement); //определяем
  const msgAnswer = chat.querySelector('.chat__message-client');

  blocksChoice.forEach(block => {
    block.addEventListener('click', e => {
      // console.log(e.currentTarget.dataset.car);
      msgAnswer.classList.add('msg-show');
      msgAnswer.innerHTML = `${e.currentTarget.dataset.car}`;
    });
  });
};

chatLogic(0, '.chat__car-card', '.car__card-block');

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
