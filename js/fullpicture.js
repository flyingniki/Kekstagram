const socialCommentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');

const picture = document.querySelector('.big-picture');
const pictureImg = document.querySelector('.big-picture__img > img');
const pictureLikes = document.querySelector('.likes-count');
const shownCommentsCount = document.querySelector('.comment-count');
const pictureCommentsCount = document.querySelector('.comments-count');

const pictureCommentsList = document.querySelector('.social__comments');
const pictureComment = document.querySelector('.social__comment');
const pictureCommentsFragment = document.createDocumentFragment();

const pictureDescription = document.querySelector('.social__caption');

const buttonClose = picture.querySelector('.big-picture__cancel');

function showPicture(url, comments, likes, description) {
  let offset = 0;
  let quantity = 5;

  picture.classList.remove('hidden');
  pictureCommentsList.innerHTML = '';
  body.classList.add('modal-open');
  pictureImg.src = url;
  pictureLikes.textContent = likes;
  pictureCommentsCount.textContent = comments.length;
  pictureDescription.textContent = description;

  showComments(comments, offset, quantity);

  socialCommentsLoader.addEventListener('click', () => {
    offset += 5;
    quantity += 5;
    showComments(comments, offset, quantity);
  });
  buttonClose.addEventListener('click', buttonCloseHandler);
  document.addEventListener('keydown', keyEscHandler);
}

function showComments(comments, offset, quantity) {
  const newComments = comments.slice(0, quantity);
  shownCommentsCount.textContent = newComments.length;
  if (newComments.length === comments.length) {
    socialCommentsLoader.classList.add('hidden');
  }
  comments.slice(offset, quantity).forEach(({ avatar, name, message }) => {
    const commentElement = pictureComment.cloneNode(true);
    commentElement.querySelector('.social__picture').src = avatar;
    commentElement.querySelector('.social__picture').alt = name;
    commentElement.querySelector('.social__text').textContent = message;
    pictureCommentsFragment.appendChild(commentElement);
  });

  pictureCommentsList.appendChild(pictureCommentsFragment);
}

const closeViewPictureModal = () => {
  picture.classList.add('hidden');
  body.classList.remove('modal-open');
  socialCommentsLoader.classList.remove('hidden');
  buttonClose.removeEventListener('click', buttonCloseHandler);
  document.removeEventListener('keydown', keyEscHandler);
};

const buttonCloseHandler = () => {
  closeViewPictureModal();
};

const keyEscHandler = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    closeViewPictureModal();
  }
};

export { showPicture };
