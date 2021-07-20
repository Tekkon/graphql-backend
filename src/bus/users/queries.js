import { db } from './db'

export const queries = {
  users: (_, __) => {
    return db;
  }
}