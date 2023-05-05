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

const question = document.querySelector('.chat-messages');
const msgBlocks = question.querySelectorAll('.chat__message-block');

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
