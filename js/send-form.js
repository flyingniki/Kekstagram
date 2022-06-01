const imgUploadForm = document.querySelector('.img-upload__form');
const successElement = document
  .querySelector('#success')
  .content.querySelector('.success');
const errorElement = document
  .querySelector('#error')
  .content.querySelector('.error');
const body = document.querySelector('body');
const imgEditor = document.querySelector('.img-upload__overlay');
const uploadInput = document.querySelector('#upload-file');
const scaleControlValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview > img');
const slider = document.querySelector('.effect-level__slider');
const successButton = successElement.querySelector('.success__button');
const errorButton = errorElement.querySelector('.error__button');

const SCALE = {
  min: 25,
  max: 100,
  default: 100,
  step: 25,
};

const sendForm = () => {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(imgUploadForm);
    fetch('https://23.javascript.pages.academy/kekstagram', {
      method: 'POST',
      body: formData,
    })
      .then(checkStatus)
      .then(onSuccessMessage)
      .catch(onErrorMessage);
  });
};

function checkStatus(response) {
  if (response.ok) {
    return response;
  }
  const { statusText, status } = response;
  throw new Error(`${status} — ${statusText}`);
}

function onSuccessMessage() {
  closeModal();
  document.body.append(successElement);
  successElement.classList.remove('hidden');
  successButton.addEventListener('click', closeSuccessHandler);
  document.addEventListener('keydown', keyEscHandler);
  document.addEventListener('click', areaClickHandler);
}

function onErrorMessage() {
  closeModal();
  document.body.append(errorElement);
  errorElement.classList.remove('hidden');
  errorButton.addEventListener('click', closeErrorHandler);
  document.addEventListener('keydown', keyEscHandler);
  document.addEventListener('click', areaClickHandler);
}

function closeSuccessMessage() {
  successElement.classList.add('hidden');
}

function closeErrorMessage() {
  errorElement.classList.add('hidden');
}

function closeSuccessHandler() {
  closeSuccessMessage();
}

function closeErrorHandler() {
  closeErrorMessage();
}

function keyEscHandler(evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    closeSuccessMessage();
    closeErrorMessage();
  }
}

function areaClickHandler(evt) {
  if (evt.target.className !== 'success__inner') {
    closeSuccessMessage();
    closeErrorMessage();
  }
}

function closeModal() {
  let className = imgUploadPreview.className;
  imgEditor.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadInput.value = '';
  scaleControlValue.value = SCALE.default + '%';
  imgUploadPreview.style.transform = 'scale(1)';
  if (className !== '') {
    imgUploadPreview.classList.remove(className);
  }
  imgUploadForm.reset();
  slider.noUiSlider.reset();
}

export { sendForm, closeModal };
