const hashtags = document.querySelector('.text__hashtags');
const comment = document.querySelector('.text__description');
const borderEffect = '5px solid red';
const submitButton = document.querySelector('.img-upload__submit');

hashtags.addEventListener('input', () => {
  let hashtagsValue = hashtags.value.toLowerCase().trim();
  let hashtagsArray = hashtagsValue.split(/\s+/);
  let uniqueArray = [];

  hashtagsArray.forEach((hashtag) => {
    if (!uniqueArray.includes(hashtag)) {
      uniqueArray.push(hashtag);
    }

    if (hashtag[0] !== '#') {
      hashtags.setCustomValidity('Хэш-тег должен начинаться с символа #');
      hashtags.style.border = borderEffect;
      submitButton.disabled = true;
    } else if (
      !hashtag.slice(1).match(/^[0-9A-ZА-ЯЁ]+$/i) &&
      hashtag.length > 1
    ) {
      hashtags.setCustomValidity(
        'Строка после решётки должна состоять из букв и чисел');
      hashtags.style.border = borderEffect;
      submitButton.disabled = true;
    } else if (hashtag[0] === '#' && hashtag.length === 1 && hashtagsArray.length <= 5) {
      hashtags.setCustomValidity(
        'Хеш-тег не может состоять только из одной решётки');
      hashtags.style.border = borderEffect;
      submitButton.disabled = true;
    } else if (hashtag.length > 20) {
      hashtags.setCustomValidity(
        'Максимальная длина одного хэш-тега 20 символов, включая решётку');
      hashtags.style.border = borderEffect;
      submitButton.disabled = true;
    } else if (hashtagsArray.length > 5) {
      hashtags.setCustomValidity('Нельзя указывать больше пяти хэш-тегов');
      hashtags.style.border = borderEffect;
      submitButton.disabled = true;
    } else if (uniqueArray.length !== hashtagsArray.length) {
      hashtags.setCustomValidity(
        'Один и тот же хэш-тег не может быть использован дважды');
      hashtags.style.border = borderEffect;
      submitButton.disabled = true;
    } else {
      hashtags.setCustomValidity('');
      hashtags.style.border = '';
      submitButton.disabled = false;
    }
  });

  hashtags.reportValidity();
});

const keyEscPreventHandler = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.stopPropagation();
  }
};

hashtags.addEventListener('keydown', keyEscPreventHandler);
comment.addEventListener('keydown', keyEscPreventHandler);
