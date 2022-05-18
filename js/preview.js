import { addPhotos } from './data.js';

let photos = addPhotos();

const previewTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const previewPictures = document.querySelector('.pictures');

const previewFragment = document.createDocumentFragment();

photos.forEach(({ url, comments, likes }) => {
  const previewElement = previewTemplate.cloneNode(true);
  previewElement.querySelector('.picture__img').src = url;
  previewElement.querySelector('.picture__comments').textContent =
    comments.length;
  previewElement.querySelector('.picture__likes').textContent = likes;
  previewFragment.appendChild(previewElement);
});

const addPreviewPictures = () => {
  previewPictures.appendChild(previewFragment);
};

export { addPreviewPictures };
