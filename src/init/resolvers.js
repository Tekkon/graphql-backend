// Query
import { queries as booksQueries } from "../bus/books/queries";
import { queries as starshipsQueries } from "../bus/starships/queries"

// Mutation
import { mutations as booksMutations } from "../bus/books/mutations";

export const resolvers = {
  Query: {
    ...booksQueries,
    ...starshipsQueries
  },
  Mutation: {
    ...booksMutations
  }
}