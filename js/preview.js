import { addPhotos } from './data.js';

let photos = addPhotos();

const previewTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const previewPictures = document.querySelector('.pictures');

const previewFragment = document.createDocumentFragment();

photos.forEach((photo) => {
  const previewElement = previewTemplate.cloneNode(true);
  previewElement.querySelector('.picture__img').src = photo.url;
  previewElement.querySelector('.picture__comments').textContent =
    photo.comments.length;
  previewElement.querySelector('.picture__likes').textContent =
    photo.likes;
  previewFragment.appendChild(previewElement);
});

const addPreviewPictures = () => {
  previewPictures.appendChild(previewFragment);
};

export { addPreviewPictures };
