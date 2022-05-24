const effectsList = document.querySelectorAll('.effects__radio');
const imgUploadPreview = document.querySelector('.img-upload__preview > img');
const slider = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level');
const effectLevelValue = document.querySelector('.effect-level__value');

const SLIDER_VALUES = {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
};

let className = '';

const effectButtonHandler = (evt) => {
  let id = evt.target.id;
  let effectName = id.slice(7);
  let newClassName = 'effects__preview--' + `${effectName}`;
  if (className !== '') {
    imgUploadPreview.classList.remove(className);
  }
  imgUploadPreview.classList.add(newClassName);
  className = newClassName;
};

effectsList.forEach((effect) => {
  effect.addEventListener('click', effectButtonHandler);
});

window.noUiSlider.create(slider, {
  range: {
    min: SLIDER_VALUES.range.min,
    max: SLIDER_VALUES.range.max,
  },
  start: SLIDER_VALUES.start,
  step: SLIDER_VALUES.step,
  connect: SLIDER_VALUES.connect,
});

slider.noUiSlider.on('update', (_, handle, unencoded) => {
  slider.value = unencoded[handle];
  effectLevelValue.value = slider.value;
});
