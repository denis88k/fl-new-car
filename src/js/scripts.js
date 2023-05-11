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

// ===========================Логика чата===================

// чат
// необходимые переменные:
// номер чата --- numberChat
// блок с чатом, который определяется от data-chat --- chat
// блок с чатом -> блоки с вопросами
// блок с чатом -> блок с выбором, которое появляется как сообщения чата --- msgBlocksChoiceElement
// блок с выбором -> блоки для выбора --- blockChoiceElement
// блок с выбором -> блоки для выбора -> выбранный блок добавляется класс active чтобы подсветить выбранный элемент

// скроллы
const scrollMsg = msg => {
  window.scrollBy({
    top: msg.offsetHeight + 10, // скролл на высоту сообщения консультанта
    behavior: 'smooth',
  });
};
// скролл до конца сообщения клиента
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
// скролл до начала новой темы чата, после того, как все сообщения появились
const scrollChat = chat => {
  const elementPosition = chat.getBoundingClientRect().top; //расстояние от элемента до верхней части экрана
  const consultantSticky = document.querySelector('.consultant_sticky.show');
  const offsetPosition = elementPosition - consultantSticky.offsetHeight; // насколько нужно скролить
  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

// возможность изменять выбранные элементы, после того, как переключишься на новую тему
// const changeChoice = numberChat => {
//   const chatMessages = document.querySelector(`.chat-messages[data-chat="${numberChat}"]`);
//   chatMessages.querySelectorAll('.block-choice')?.forEach(blockChoice => {
//     blockChoice.addEventListener('click', e => {
//       chatMessages.querySelectorAll('.block-choice')?.forEach(blockChoice => {
//         blockChoice.classList.remove('active');
//       });
//       e.currentTarget.classList.add('active');
//       chatMessages.querySelector('.chat__message-client').innerHTML = e.currentTarget.dataset.choice;
//     });
//   });
// };

let numberChat = 0;

const chatLength = document.querySelectorAll('.chat-messages').length; // длина блоков чата
// логика работы
const chatLogic = numberChat => {
  const chat = document.querySelector(`.chat-messages[data-chat="${numberChat}"]`); // блок чата
  const msgBlocks = chat.querySelectorAll('.chat__message-block'); // блок сообщений консультанта + анимация печатания

  // блоки с сообщениями консультанта
  msgBlocks.forEach((msgBlock, index) => {
    const msgPrint = msgBlock.querySelector('.chat__message-print'); // анимация печатания
    const msgConsult = msgBlock.querySelector('.chat__message-consultant'); // сообщение консультанта

    setTimeout(() => {
      // добавление надписи о том, что консультант печатает, с задержкой в 550мс
      setTimeout(() => {
        !msgPrint.classList.contains('msg-print-show') && msgPrint.classList.add('msg-print-show');
        numberChat && scrollMsg(msgPrint); // плавный автоматический скролл до анимации печатания
      }, 550);
      // скрытие о печатании консультанта
      // показ сообщения от консультанта
      // с задержкой в 2,5с
      setTimeout(() => {
        msgPrint.classList.remove('msg-print-show'); // удаление анимации печатания
        msgConsult.classList.add('msg-show'); // появление сообщения консультанта
        numberChat && scrollMsg(msgConsult); // плавный автоматический скролл до сообщения консультанта
        // console.log(msgConsult, msgConsult.offsetHeight);
      }, 2500);
    }, index * 2500 + 550);
  });

  const msgBlocksChoice = chat.querySelector('.msg-blocks-choice'); // блок с выборами

  setTimeout(() => {
    msgBlocksChoice?.classList.add('msg-show'); // блок с выборами появляется

    // numberChat && chat.scrollIntoView(scrollIntoViewOptionsChat);
    if (numberChat === chatLength - 1) {
      document.querySelector('.promo__footer-inner').classList.add('active');
      document.querySelector('.footer').classList.add('active');
    }
    setTimeout(() => {
      numberChat && scrollChat(chat); // плавный скролл до начала нового блока чата с отступом
    });
  }, 2500 * msgBlocks.length + 950);

  // блоки c выбором за которыми нужно следить
  const blocksChoice = msgBlocksChoice.querySelectorAll('.block-choice');
  if (blocksChoice) {
    const msgAnswer = chat.querySelector('.chat__message-client');

    const clickNextChat = e => {
      // console.log(e.currentTarget.dataset.car);
      e.currentTarget.classList.add('active');
      msgAnswer.classList.add('msg-show-client');
      msgAnswer.innerHTML = e.currentTarget.dataset.choice;
      document.querySelector('.chat__inner').scrollIntoView(scrollIntoViewOptions); // прокрутка вниз, до сообщения с ответом клиента
      // scrollMsg(msgPrint);
      // console.log(numberChat, 'in');
      blocksChoice.forEach(block => block.removeEventListener('click', clickNextChat));
      // changeChoice(numberChat); // добавление изменения выбора в чате
      // numberChat && changeChoiceReplayChat(numberChat);
      numberChat++;
      chatLogic(numberChat);
    };

    blocksChoice.forEach(block => {
      block.addEventListener('click', clickNextChat);
    });

    blocksChoice.forEach(block => {
      block.addEventListener('click', clickReplayChat);
    });
  }
};

const clickReplayChat = () => {
  console.log(numberChat);
  if (numberChat) {
    console.log(numberChat, 'clickReplayChat');
  }
};

// проигрывание темы чата снова, в зависимости от изменения ответа в чате
// логика при клике на блок с вариантами выбора
const clickChoiceChangeChat = e => {
  console.log(numberChat, e.currentTarget.parentNode.parentNode);
  if (numberChat && e.currentTarget.parentNode.parentNode.classList.contains('msg-show')) {
    console.log('сработало условие');
    // удаляю в каждом класс active

    // blocksChoice.forEach(blockChoice => {
    //   blockChoice.classList.remove('active');
    // });
    // e.currentTarget.classList.add('active'); // навесил нажатому elem с выбором класс active

    // const msgClient = chat.querySelector('.chat__message-client'); // сообщение клиента
    // msgClient.classList.contains('msg-show-client') && msgClient.classList.remove('msg-show-client'); // если ответ клиента отображён, то удалить этот класс
    // msgClient.innerHTML = e.currentTarget.dataset.choice;
    // msgClient.classList.add('msg-show-client');

    // const currentNumber = chat.dataset.chat; // номер текущей темы чата
    // // а теперь пройдёмся по всем темам чата, которые уже открыты
    // for (let i = currentNumber + 1; i < chatLength; i++) {
    //   const msgBlocks = chats[i].querySelectorAll('.chat__message-block'); // блок сообщений консультанта + анимация печатания
    //   // блоки с сообщениями консультанта
    //   msgBlocks.forEach(msgBlock => {
    //     msgBlock.querySelector('.chat__message-consultant').classList.remove('msg-show'); // сообщение консультанта
    //   });

    //   // блок с выборами
    //   const msgBlocksChoice = chats[i].querySelector('.msg-blocks-choice');
    //   msgBlocksChoice?.classList.remove('msg-show');
    //   // блоки с вариантами выбора
    //   msgBlocksChoice.querySelectorAll('.block-choice')?.forEach(blockChoice => {
    //     blockChoice.classList.remove('active');
    //   });
    //   // если следующая тема чата это последний чат, то нужно скрыть actual-promo и footer
    //   if (i === chatLength - 1) {
    //     document.querySelector('.promo__footer-inner').classList.remove('active');
    //     document.querySelector('.footer').classList.remove('active');
    //   }
    // }
    // numberChat = currentNumber + 1;
    // chatLogic(numberChat);
  }
};

const changeChoiceReplayChat = numberChat => {
  console.log(numberChat, 'out');
  const chats = document.querySelectorAll(`.chat-messages`); // все темы с чатом
  chats.forEach(chat => {
    const blocksChoice = chat.querySelectorAll('.block-choice'); // блоки с выбором

    blocksChoice?.forEach(blockChoice => {
      // навешиваю каждому прослушку на клик
      // blockChoice.addEventListener('click', e => {
      //   console.log();
      // });
      blockChoice.addEventListener('click', clickChoiceChangeChat);
    });
  });
};

// changeChoiceReplayChat();

// const inputs = document.querySelectorAll('.form__input');

chatLogic(0);
