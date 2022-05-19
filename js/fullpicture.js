const picture = document.querySelector('.big-picture');
const pictureImg = document.querySelector('.big-picture__img > img');
const pictureLikes = document.querySelector('.likes-count');
const pictureCommentsCount = document.querySelector('.comments-count');

const pictureCommentsList = document.querySelector('.social__comments');
const pictureComment = document.querySelector('.social__comment');
const pictureCommentsFragment = document.createDocumentFragment();

const pictureDescription = document.querySelector('.social__caption');

const buttonClose = document.querySelector('.big-picture__cancel');

function showPicture(url, comments, likes, description) {
  picture.classList.remove('hidden');
  document.querySelector('.social__comment-count').classList.add('hidden');
  document.querySelector('.comments-loader').classList.add('hidden');
  document.querySelector('body').classList.add('modal-open');

  pictureImg.src = url;
  pictureLikes.textContent = likes;
  pictureCommentsCount.textContent = comments.length;
  pictureDescription.textContent = description;

  comments.forEach((comment) => {
    const commentElement = pictureComment.cloneNode(true);

    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;
    pictureCommentsFragment.appendChild(commentElement);
  });

  pictureCommentsList.appendChild(pictureCommentsFragment);
}

buttonClose.addEventListener('click', () => {
  picture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  const keyName = evt.key;
  if (keyName === 'Escape') {
    picture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  }
});

export { showPicture };
