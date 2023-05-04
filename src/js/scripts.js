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
