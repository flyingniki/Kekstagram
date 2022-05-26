const hashtags = document.querySelector('.text__hashtags');
const comment = document.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');

const submitDisable = () => {
  hashtags.style.border = '5px solid red';
  submitButton.disabled = true;
};

const submitEnable = () => {
  hashtags.setCustomValidity('');
  hashtags.style.border = '';
  submitButton.disabled = false;
};

const validator = {
  checkFilled: (field) => {
    return field !== '';
  },
  checkStartSymbol: (item) => {
    return item[0] !== '#';
  },
  checkHashtagRules: (item) => {
    return !item.slice(1).match(/^[0-9A-ZА-ЯЁ]+$/i) && item.length > 1;
  },
  checkHashtagName: (item, items) => {
    return item[0] === '#' && item.length === 1 && items.length <= 5;
  },
  checkMaxLength: (item) => {
    return item.length > 20;
  },
  checkHashtagsQuantity: (items) => {
    return items.length > 5;
  },
  checkUnique: (uniqueItems, items) => {
    return uniqueItems.length !== items.length;
  },
};

hashtags.addEventListener('input', () => {
  let hashtagsValue = hashtags.value.toLowerCase().trim();
  let hashtagsArray = hashtagsValue.split(/\s+/);
  let uniqueArray = [];

  if (validator.checkFilled(hashtagsValue)) {
    submitDisable();
  } else {
    submitEnable();
  }

  hashtagsArray.forEach((hashtag) => {
    if (!uniqueArray.includes(hashtag)) {
      uniqueArray.push(hashtag);
    }

    if (validator.checkStartSymbol(hashtag)) {
      hashtags.setCustomValidity('Хэш-тег должен начинаться с символа #');
    } else if (validator.checkHashtagRules(hashtag)) {
      hashtags.setCustomValidity(
        'Строка после решётки должна состоять из букв и чисел');
    } else if (validator.checkHashtagName(hashtag, hashtagsArray)) {
      hashtags.setCustomValidity(
        'Хеш-тег не может состоять только из одной решётки');
    } else if (validator.checkMaxLength(hashtag)) {
      hashtags.setCustomValidity(
        'Максимальная длина одного хэш-тега 20 символов, включая решётку');
    } else if (validator.checkHashtagsQuantity(hashtagsArray)) {
      hashtags.setCustomValidity('Нельзя указывать больше пяти хэш-тегов');
    } else if (validator.checkUnique(uniqueArray, hashtagsArray)) {
      hashtags.setCustomValidity(
        'Один и тот же хэш-тег не может быть использован дважды');
    } else {
      submitEnable();
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
