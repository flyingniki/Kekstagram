import { showPicture } from './fullpicture.js';

function addPreviewPictures(photos) {
  const previewTemplate = document
    .querySelector('#picture')
    .content.querySelector('.picture');
  const previewPictures = document.querySelector('.pictures');

  const previewFragment = document.createDocumentFragment();

  photos.forEach(({ url, comments, likes, description }) => {
    const previewElement = previewTemplate.cloneNode(true);
    previewElement.querySelector('.picture__img').src = url;
    previewElement.querySelector('.picture__comments').textContent =
      comments.length;
    previewElement.querySelector('.picture__likes').textContent = likes;
    previewElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      showPicture(url, comments, likes, description);
    });
    previewFragment.appendChild(previewElement);
  });

  previewPictures.appendChild(previewFragment);
}

export { addPreviewPictures };
