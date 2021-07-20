// Query
import { queries as booksQueries } from "../bus/books/queries";

// Mutation
import { mutations as booksMutations } from "../bus/books/mutations";

export const resolvers = {
  Query: {
    ...booksQueries
  },
  Mutation: {
    ...booksMutations
  }
}