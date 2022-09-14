const ACTIVE = 'subscription-tabs__button--active';
const TABACTIVE = 'tab--active';
const TICKETS = ['js-month', 'js-half-year', 'js-year'];

const connection = document.querySelector('.connection');
const form = connection.querySelector('form');

const noScriptBlocks = document.querySelectorAll('.no-script');

const tabButtons = document.querySelectorAll('.subscription-tabs__button');
const tabs = document.querySelectorAll('.tab');

noScriptBlocks.forEach((el)=>{
  el.classList.remove('no-script');
});

const getFormData = (element) => {
  const name = element.querySelector('input[name=name]').value;
  const phone = element.querySelector('input[name=phone]').value;
  localStorage.setItem('name', name);
  localStorage.setItem('phone', phone);
};

if (form) {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    getFormData(form);
    form.submit();
  });
}

const showTab = (button) => {
  TICKETS.forEach((el) => {
    if (button.classList.contains(el)) {
      tabs.forEach((tab) => {
        if (tab.classList.contains(el)) {
          tab.classList.add(`${TABACTIVE}`);
        }
      });
    }
  });

};

const toggleTabButton = (tabButton) => {
  if (tabButton.classList.contains(`${ACTIVE}`)) {
    return;
  }
  tabs.forEach((el) => {
    el.classList.remove(`${TABACTIVE}`);
  });
  tabButtons.forEach((el) => {
    el.classList.remove(`${ACTIVE}`);
  });
  tabButton.classList.add(`${ACTIVE}`);
  showTab(tabButton);
};

tabButtons.forEach((button) => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    toggleTabButton(evt.target);
  }
  );
  button.addEventListener('focus', (evt) => {
    evt.preventDefault();
    toggleTabButton(evt.target);
  });
});

document.addEventListener('DOMContentLoaded', () => {

  const video = document.querySelector('.presentation-media__video');
  if (video) {
    const playButton = video.querySelector('.presentation-media__video-play');
    const preview = video.querySelector('img');
    const videoSource = video.dataset.source;
    playButton.addEventListener('click', () => {
      playButton.remove();
      preview.remove();
      video.classList.add('presentation-media__video--played');
      video.insertAdjacentHTML('afterbegin', '<iframe width="364" height="228" src="' + videoSource + '" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> ');
    });
  } else {
    return;
  }
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
