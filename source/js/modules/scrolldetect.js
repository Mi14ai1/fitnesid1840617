const body = document.querySelector('body');
const platesImg = document.querySelector('.subscription__plates');
let platesPosition = +window.getComputedStyle(platesImg).right.replace('px', '');

const getScrollWidth = () => {
  document.querySelector('body').insertAdjacentHTML('beforeend', '<div class="scroll-detector"></div>');
  const scrollDetector = document.querySelector('.scroll-detector');
  scrollDetector.width = '100%';
  const result = window.innerWidth - scrollDetector.clientWidth;
  scrollDetector.remove();
  return result;
};

if (body.clientWidth < 1366) {
  platesPosition = platesPosition + getScrollWidth() - 8;
  platesImg.style.right = `${platesPosition}px`;
} else {
  platesImg.style.right = '-103px';
}

export {getScrollWidth};
