const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');

const picture = document.querySelector('.big-picture');
const pictureImg = document.querySelector('.big-picture__img > img');
const pictureLikes = document.querySelector('.likes-count');
const pictureCommentsCount = document.querySelector('.comments-count');

const pictureCommentsList = document.querySelector('.social__comments');
const pictureComment = document.querySelector('.social__comment');
const pictureCommentsFragment = document.createDocumentFragment();

const pictureDescription = document.querySelector('.social__caption');

const buttonClose = picture.querySelector('.big-picture__cancel');

function showPicture(url, comments, likes, description) {
  picture.classList.remove('hidden');
  pictureCommentsList.innerHTML = '';
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  body.classList.add('modal-open');

  pictureImg.src = url;
  pictureLikes.textContent = likes;
  pictureCommentsCount.textContent = comments.length;
  pictureDescription.textContent = description;

  comments.forEach(({ avatar, name, message }) => {
    const commentElement = pictureComment.cloneNode(true);

    commentElement.querySelector('.social__picture').src = avatar;
    commentElement.querySelector('.social__picture').alt = name;
    commentElement.querySelector('.social__text').textContent = message;
    pictureCommentsFragment.appendChild(commentElement);
  });

  pictureCommentsList.appendChild(pictureCommentsFragment);

  buttonClose.addEventListener('click', buttonCloseHandler);
  document.addEventListener('keydown', keyEscHandler);
}

const buttonCloseHandler = () => {
  picture.classList.add('hidden');
  body.classList.remove('modal-open');
  buttonClose.removeEventListener('click', buttonCloseHandler);
};

const keyEscHandler = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    picture.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', keyEscHandler);
  }
};

export { showPicture };
