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
effectLevel.style.visibility = 'hidden';

const effectButtonHandler = (evt) => {
  let id = evt.target.id;
  let effectName = id.slice(7);
  let newClassName = 'effects__preview--' + `${effectName}`;
  if (className !== '') {
    imgUploadPreview.classList.remove(className);
  }
  imgUploadPreview.classList.add(newClassName);
  className = newClassName;
  if (newClassName !== 'effects__preview--none') {
    effectLevel.style.visibility = 'visible';
  } else {
    effectLevel.style.visibility = 'hidden';
  }
  imgUploadPreview.style.filter = '';
  slider.noUiSlider.reset();
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

  if (imgUploadPreview.className === 'effects__preview--chrome') {
    imgUploadPreview.style.filter = `grayscale(${
      effectLevelValue.value * 0.01
    })`;
  } else if (imgUploadPreview.className === 'effects__preview--sepia') {
    imgUploadPreview.style.filter = `sepia(${effectLevelValue.value * 0.01})`;
  } else if (imgUploadPreview.className === 'effects__preview--marvin') {
    imgUploadPreview.style.filter = `invert(${effectLevelValue.value}%)`;
  } else if (imgUploadPreview.className === 'effects__preview--phobos') {
    imgUploadPreview.style.filter = `blur(${effectLevelValue.value * 0.03}px)`;
  } else if (imgUploadPreview.className === 'effects__preview--heat') {
    imgUploadPreview.style.filter = `brightness(${
      effectLevelValue.value * 0.03
    })`;
  } else {
    imgUploadPreview.style.filter = '';
  }
});
