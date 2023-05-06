import { addPreviewPictures } from './preview.js';
import { showFilter } from './filters.js';

const errorMessage = document.querySelector('.server-error');
const errorButton = document.querySelector('.server-error__button');

const getData = () => {
  fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then(checkStatus)
    .then((response) => response.json())
    .then(addPhotos)
    .then(addPreviewPictures)
    .then(showFilter)
    .catch(showErrors);
};

function checkStatus(response) {
  if (response.ok) {
    return response;
  }
  const { statusText, status } = response;
  throw new Error(`${status} — ${statusText}`);
}

function addPhotos(posts) {
  const photos = [];
  posts.forEach(({ id, url, likes, description, comments }) => {
    photos.push({
      id: id,
      url: url,
      likes: likes,
      comments: comments,
      description: description,
    });
  });
  return photos;
}

function showErrors() {
  errorMessage.classList.remove('hidden');
  errorButton.addEventListener('click', closeErrorHandler);
}

function closeError() {
  errorMessage.classList.add('hidden');
  errorButton.removeEventListener('click', closeErrorHandler);
}

function closeErrorHandler() {
  closeError();
}

export { getData };
