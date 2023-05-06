// фиксация шапки консультанта
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

// ======================
// const scrollIntoViewOptions = {
//   behavior: 'smooth',
//   block: 'end',
//   inline: 'nearest',
// };
// ScrollElement.scrollIntoView(scrollIntoViewOptions);

// =======================
// scrollTarget - элемент до которого нужно скролить
// function scrollMsg(scrollTarget) {
//   const topOffset = 0;
//   const elementPosition = scrollTarget.getBoundingClientRect().top; //расстояние от элемента до верхней части экрана
//   const offsetPosition = elementPosition - topOffset; // насколько нужно скролить

//   window.scrollBy({
//     top: offsetPosition,
//     behavior: 'smooth',
//   });
// }

// =================================================

// чат
// необходимые переменные:
// номер чата --- numberChat
// блок с чатом, который определяется от data-chat --- chat
// блок с чатом -> блоки с вопросами
// блок с чатом -> блок с выбором, которое появляется как сообщения чата --- msgBlocksChoiceElement
// блок с выбором -> блоки для выбора --- blockChoiceElement
// блок с выбором -> блоки для выбора -> выбранный блок добавляется класс active чтобы подсветить выбранный элемент

const scrollMsg = msgConsult => {
  window.scrollBy({
    top: msgConsult.offsetHeight,
    behavior: 'smooth',
  });
};
const scrollIntoViewOptions = {
  behavior: 'smooth',
  block: 'end',
  inline: 'nearest',
};
// const scrollIntoViewOptionsChat = {
//   behavior: 'smooth',
//   block: 'start',
//   inline: 'nearest',
// };
const scrollChat = chat => {
  const elementPosition = chat.getBoundingClientRect().top; //расстояние от элемента до верхней части экрана
  const consultantSticky = document.querySelector('.consultant_sticky.show');
  const offsetPosition = elementPosition - consultantSticky.offsetHeight - 25; // насколько нужно скролить
  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

let numberChat = 0;
const arrMsgBlock = ['car', 'equipment', 'color'];

const chatLogic = numberChat => {
  const chat = document.querySelector(`.chat-messages[data-chat="${numberChat}"]`);
  const msgBlocks = chat.querySelectorAll('.chat__message-block');

  msgBlocks.forEach((msgBlock, index) => {
    const msgPrint = msgBlock.querySelector('.chat__message-print');
    const msgConsult = msgBlock.querySelector('.chat__message-consultant');

    setTimeout(() => {
      // добавление надписи о том, что консультант печатает, с задержкой в 550мс
      setTimeout(() => {
        !msgPrint.classList.contains('msg-print-show') && msgPrint.classList.add('msg-print-show');
      }, 550);
      // скрытие о печатании консультанта
      // показ сообщения от консультанта
      // с задержкой в 2,5с
      setTimeout(() => {
        msgPrint.classList.remove('msg-print-show');
        msgConsult.classList.add('msg-show');
        numberChat && scrollMsg(msgConsult);
        // console.log(msgConsult, msgConsult.offsetHeight);
      }, 2500);
    }, index * 2500 + 550);
  });

  const msgBlocksChoice = chat.querySelector('.msg-blocks-choice');

  setTimeout(() => {
    msgBlocksChoice?.classList.add('msg-show');
    // numberChat && chat.scrollIntoView(scrollIntoViewOptionsChat);
    numberChat && scrollChat(chat);
    if (numberChat === 3) {
      document.querySelector('.promo__footer-inner').classList.add('active');
    }
  }, 2500 * msgBlocks.length + 950);

  // блоки c выбором за которыми нужно следить
  const blocksChoice = msgBlocksChoice.querySelectorAll('.block-choice');
  if (blocksChoice) {
    const msgAnswer = chat.querySelector('.chat__message-client');

    const blockChoiceClick = e => {
      // console.log(e.currentTarget.dataset.car);
      msgAnswer.classList.add('msg-show-client');
      e.currentTarget.classList.add('active');
      msgAnswer.innerHTML = e.currentTarget.dataset[arrMsgBlock[numberChat]];
      document.querySelector('.chat__inner').scrollIntoView(scrollIntoViewOptions); // прокрутка вниз, до сообщения с ответом клиента
      // scrollMsg(msgPrint);
      // console.log(numberChat, 'in');
      blocksChoice.forEach(block => block.removeEventListener('click', blockChoiceClick));
      numberChat++;
      chatLogic(numberChat);
    };

    blocksChoice.forEach(block => {
      block.addEventListener('click', blockChoiceClick);
    });
  }
};

chatLogic(0);
