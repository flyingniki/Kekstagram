import { addPreviewPictures } from './preview.js';

const getData = (onSuccess, onError) => {
  fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then(checkStatus)
    .then((response) => response.json())
    .then(addPhotos)
    .then((photos) => addPreviewPictures(photos))
    .catch(() => showErrors());

  function checkStatus(response) {
    if (response.ok) {
      return response;
    }
    const { statusText, status } = response;
    throw new Error(`${status} — ${statusText}`);
  }

  function addComments(posts) {
    const comments = [];
    posts.forEach((post) => {
      post.comments.forEach(({ avatar, id, message, name }) => {
        comments.push({
          avatar: avatar,
          id: id,
          message: message,
          name: name,
        });
      });
    });
    return comments;
  }

  function addPhotos(posts) {
    const photos = [];
    posts.forEach(({ id, url, likes, description }) => {
      photos.push({
        id: id,
        url: url,
        likes: likes,
        comments: addComments(posts),
        description: description,
      });
    });
    return photos;
  }

  function showErrors() {
    const errorMessage = document.querySelector('.server-error');
    const errorButton = document.querySelector('.server-error__button');
    errorMessage.classList.remove('hidden');
    errorButton.addEventListener('click', closeErrorHandler);

    function closeError() {
      errorMessage.classList.add('hidden');
      errorButton.removeEventListener('click', closeErrorHandler);
    }

    function closeErrorHandler() {
      closeError();
    }
  }
};

export { getData };
