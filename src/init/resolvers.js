// Query
import { queries as booksQueries } from "../bus/books/queries";
import { queries as starshipsQueries } from "../bus/starships/queries"
import { queries as usersQueries } from "../bus/users/queries"

// Mutation
import { mutations as booksMutations } from "../bus/books/mutations";
import { mutations as usersMutations } from "../bus/users/mutations";

// Subscription
import { subscriptions as userSubscription } from "../bus/users/subscriptions";
import { subscriptions as bookSubscription } from "../bus/books/subscriptions";

export const resolvers = {
  Query: {
    ...booksQueries,
    ...starshipsQueries,
    ...usersQueries
  },
  Mutation: {
    ...booksMutations,
    ...usersMutations
  },
  Subscription: {
    ...userSubscription,
    ...bookSubscription
  }
}