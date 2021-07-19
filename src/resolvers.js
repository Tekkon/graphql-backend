import { getBooks, getBookById } from './model'

export const resolvers = {
  Query: {
    books: () => getBooks(),
    book: (_, { id }) => {
      return getBookById(id)
    }
  }
}