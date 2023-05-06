const imgFilters = document.querySelector('.img-filters');
const filterDefault = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');
const pictures = document.querySelectorAll('.picture');

const DEFAULT_LOAD = 5;
const RANDOM_LOAD = 10;

function showFilter() {
  return imgFilters.classList.remove('img-filters--inactive');
}

function removePictures() {
  pictures.forEach((picture) => {
    picture.remove();
  });
}

function defaultFilter(photos) {
  filterDefault.addEventListener('click', () => {
    photos.slice(0, DEFAULT_LOAD);
  });
}

// function randomFilter(photos) {
//   let unique = [];
//   filterRandom.addEventListener('click', () => {
//     photos.slice().
//   });
// }

function discussedFilter(photos) {
  filterDiscussed.addEventListener('click', () => {
    removePictures();
    photos.slice().sort((a, b) => {
      return b.comments.length - a.comments.length;
    });
  });
}

export { showFilter, removePictures, defaultFilter };
