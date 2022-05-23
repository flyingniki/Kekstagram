const uploadInput = document.querySelector('#upload-file');
const imgEditor = document.querySelector('.img-upload__overlay');
const closeImgEditor = document.querySelector('#upload-cancel');
const body = document.querySelector('body');

uploadInput.addEventListener('change', uploadControlHandler);

const uploadControlHandler = () => {
  imgEditor.classList.remove('hidden');
  body.classList.add('modal-open');
};

closeImgEditor.addEventListener('click', closeEditorHandler);
document.addEventListener('keydown', keyEscHandler);

const closeModal = () => {
  imgEditor.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadInput.value = '';
  closeImgEditor.removeEventListener('click', closeEditorHandler);
  document.removeEventListener('keydown', keyEscHandler);
};

const closeEditorHandler = () => {
  closeModal();
};

const keyEscHandler = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    closeModal();
  }
};
