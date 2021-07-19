import { getBooks, getBookById, saveBook } from './model'

export const resolvers = {
  Query: {
    books: () => getBooks(),
    book: (_, { id }) => {
      return getBookById(id)
    }
  },
  Mutation: {
    addBook: (_, { book }) => {
      return saveBook(book)
    }
  }
}