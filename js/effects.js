const effectsList = document.querySelectorAll('.effects__radio');
const imgUploadPreview = document.querySelector('.img-upload__preview > img');

let previousClassName = '';

effectsList.forEach((effect) => {
  const effectButtonHandler = (evt) => {
    let id = evt.target.id;
    let className = 'effects__preview--' + `${id.slice(7)}`;
    if (previousClassName !== '') {
      imgUploadPreview.classList.remove(previousClassName);
    }
    imgUploadPreview.classList.add(className);
    previousClassName = className;
  };
  effect.addEventListener('click', effectButtonHandler);
});
