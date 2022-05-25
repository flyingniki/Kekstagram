const hashtags = document.querySelector('.text__hashtags');
const comment = document.querySelector('.text__description');
const borderEffect = '3px solid red';

let hashtagsValue = hashtags.value;

hashtags.addEventListener('input', () => {
  if (hashtagsValue[0] !== '#') {
    hashtags.setCustomValidity('Хэш-тег должен начинаться с символа #');
    hashtags.style.border = borderEffect;
  } else if (!hashtagsValue.slice(1).match(/^[0-9A-ZА-ЯЁ]+$/i) && hashtagsValue.length > 1) {
    hashtags.setCustomValidity(
      'Строка после решётки должна состоять из букв и чисел');
    hashtags.style.border = borderEffect;
  } else if (hashtagsValue[0] === '#' && hashtagsValue.length === 1) {
    hashtags.setCustomValidity(
      'Хеш-тег не может состоять только из одной решётки');
    hashtags.style.border = borderEffect;
  } else if (hashtagsValue.length > 20) {
    hashtags.setCustomValidity(
      'Максимальная длина одного хэш-тега 20 символов, включая решётку');
    hashtags.style.border = borderEffect;
  }
  else {
    hashtags.setCustomValidity('');
    hashtags.style.border = '';
  }
  hashtags.reportValidity();
});
