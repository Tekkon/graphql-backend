const generateId = require('uuid/v1')

const initialDB = [
  [
    0,
    {
      title: "Harry Potter and the Philosopher's stone",
      author: "J.K. Rowling"
    }
  ],
  [
    1,
    {
      title: "Jurassic Park",
      author: "Michael Crichton"
    }
  ]
];

const booksDB = new Map(initialDB);

export const getBooks = () => {
  const books = [];

  booksDB.forEach((value, key) => {
    const currentBook = {
      id: key,
      ...value
    };

    books.push(currentBook);
  })

  return books;
}

export const getBookById = (id) => {
  const book = booksDB.get(id);

  return { id, ...book }
}

export const saveBook = (book) => {
  const id = generateId();
  booksDB.set(id, book);
  const savedBook = booksDB.get(id);

  return { id, ...savedBook }
}