import { closeEditorModal } from './send-form.js';

const uploadInput = document.querySelector('#upload-file');
const imgEditor = document.querySelector('.img-upload__overlay');
const closeImgEditor = document.querySelector('#upload-cancel');
const body = document.querySelector('body');

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview > img');

const SCALE = {
  min: 25,
  max: 100,
  default: 100,
  step: 25,
};

const uploadControlHandler = () => {
  imgEditor.classList.remove('hidden');
  body.classList.add('modal-open');
};

uploadInput.addEventListener('change', uploadControlHandler);

const closeEditorHandler = () => {
  closeEditorModal();
};

const keyEscHandler = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    closeEditorModal();
  }
};

closeImgEditor.addEventListener('click', closeEditorHandler);
document.addEventListener('keydown', keyEscHandler);

scaleControlSmaller.addEventListener('click', () => {
  let scale = parseInt(scaleControlValue.value, 10) - SCALE.step;
  if (scale < SCALE.min) {
    scale = SCALE.min;
  }
  scaleControlValue.value = scale + '%';
  imgUploadPreview.style.transform = `scale(${scale / 100})`;
});

scaleControlBigger.addEventListener('click', () => {
  let scale = parseInt(scaleControlValue.value, 10) + SCALE.step;
  if (scale > SCALE.max) {
    scale = SCALE.max;
  }
  scaleControlValue.value = scale + '%';
  imgUploadPreview.style.transform = `scale(${scale / 100})`;
});
