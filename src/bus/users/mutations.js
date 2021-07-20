import { db } from './db'

export const mutations = {
  signUp: (_, user) => {
    db.push(user)

    return user;
  }
}