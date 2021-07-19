import { getBooks } from './model'

export const resolvers = {
  Query: {
    books: () => getBooks()
  }
}