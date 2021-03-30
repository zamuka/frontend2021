// Функция объявлена с помощью нового "стрелочного" синтаксиса
// Разница в функциях, полученных с помощью ключево слова
// function и стрелкой - ЕСТЬ. и такой вариант не всегда годится
// Рассмотрим различия позже, а пока годится и стрелочная.
// привыкаем к написанию
const startUp = () => {
  console.log('Window loaded!');

  /** @type {HTMLImageElement} */
  const img = document.querySelector('#image');

  /**
   * Тут спряталась еще одна функция. Сразу можно ее и не заметить, но она есть
   * () => console.log('Image Loaded')
   * это полноценная функция, которую я создал и, не сохраняя ссылки на нее,
   * передал как параметр и зарегистрировал как callback на событие "load"
   * у объекта, который хранится в переменной "img"
   */
  img.addEventListener('load', () => console.log('Image Loaded'));

  /**
   * Заодно и на клик повесим. Если мы не сохранили ссылку, то не сможем
   * "разрегистрировать" такой обработчик события. Но нам и не надо.
   */
  img.addEventListener('click', () => {
    img.src = 'https://www.fillmurray.com/460/300';
  });
}

// все, что написали выше мы хотим выполнить после загрузки и обработки HTML
// говорим об этом браузеру, добавляя событие на глобальный объект window
window.addEventListener('DOMContentLoaded', startUp);
setTimeout()