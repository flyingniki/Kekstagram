function getRandomInt(min, max) {
  if (min >= 0 && max >= 0) {
    if (max < min) {
      [min, max] = [max, min];
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return 'Введенные значения должны быть положительными';
}

getRandomInt(5, 7);

function strMaxLenght(string, maxLength) {
  string.length <= maxLength ? true : false;
}

strMaxLenght('Test string', 140);

const PHOTOS_COUNT = 25;

const COMMENT_ID = {
  min: 1,
  max: 100,
};

const AVATAR_NUMBER = {
  min: 1,
  max: 6,
};

const LIKES_COUNT = {
  min: 15,
  max: 200,
};

const COMMENTS_COUNT = {
  min: 5,
  max: 12,
};

const DESCRIPTIONS_PHOTOS = [
  'Крутая фотка',
  'Новый фильтр',
  'У меня новая камера',
  'Зацените меня',
  'Котейка',
];

const AUTHORS = [
  'Дима',
  'Маша',
  'Сережа',
  'Алекс',
  'Рикки',
  'Оля',
  'Макс',
  'Катя',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

let photos = [];

function getRandomElement(array) {
  let index = getRandomInt(0, array.length - 1);
  return array[index];
}

getRandomElement(DESCRIPTIONS_PHOTOS);

function addComments() {
  const comments = [];
  for (
    let i = 0;
    i < getRandomInt(COMMENTS_COUNT.min, COMMENTS_COUNT.max);
    i++
  ) {
    comments.push({
      id: getRandomInt(COMMENT_ID.min, COMMENT_ID.max),
      avatar:
        'img/avatar-' +
        getRandomInt(AVATAR_NUMBER.min, AVATAR_NUMBER.max) +
        '.svg',
      message: getRandomElement(MESSAGES),
      name: getRandomElement(AUTHORS),
    });
  }
  return comments;
}

function addPhotos() {
  for (let i = 0; i < PHOTOS_COUNT; i++) {
    photos.push({
      id: i + 1,
      url: 'photos/' + (i + 1) + '.jpg',
      description: getRandomElement(DESCRIPTIONS_PHOTOS),
      likes: getRandomInt(LIKES_COUNT.min, LIKES_COUNT.max),
      comments: addComments(),
    });
  }
}

addPhotos();
