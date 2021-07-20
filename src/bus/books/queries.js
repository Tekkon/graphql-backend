// Core
import { ApolloError } from "apollo-server-express";

// Model
import { getBookById, getBooks } from "./model/index";

export const queries = {
  books: () => getBooks(),
  book: (_, {id}) => {
    try {
      return getBookById(id)
    } catch ({message}) {
      throw new ApolloError(message)
    }
  }
}