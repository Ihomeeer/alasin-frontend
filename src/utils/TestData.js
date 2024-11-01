//Файл со всякими данными для теста верстки, пока приложение не подключено к API

//юзеры
const firstUser = {
  name: 'Никита',
  avatarLink: 'https://russianstartuprating.ru/wp-content/uploads/2021/01/%D0%BA%D0%B0%D1%80%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F-%D0%BC%D0%B5%D0%B4%D0%B2%D0%B5%D0%B6%D1%8C%D1%8F-%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0-1280x720.jpg',
  id: 1,
}

const secondUser = {
  name: 'Nikita',
  avatarLink: 'https://i01.fotocdn.net/s204/0c63f76868bb2869/public_pin_l/2292726425.jpg',
  id: 2,
}

const testUsers = [firstUser, secondUser]

//Данные для карточек с уроками на главной странице
const testLessonsCards = [
  {
    title: 'Введение',
    imageLink: 'https://static.tildacdn.com/tild6637-3434-4666-a366-653830316239/Kareliya-5.jpg',
    progressBar: 47,
    id: 1,
  },
  {
    title: 'Вводные конструкции',
    imageLink: 'https://youtravel.me/upload/chat/ead/6aouczs5xil3nf62pjgz1ekncgj1y941.jpeg',
    progressBar: 15,
    id: 2,
  },
  {
    title: 'Грамматика',
    imageLink: 'https://sfish.ru/uploads/_pages/2400/6-16.jpg',
    progressBar: 85,
    id: 3,
  },
]


export {
  testUsers,
  testLessonsCards
}