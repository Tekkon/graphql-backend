import { AuthenticationError } from "apollo-server-express";
import jwt from 'jsonwebtoken';
import { USER_SECRET } from "../../init/config";

import { db } from './db'

export const mutations = {
  signUp: (_, user) => {
    db.push(user)

    return user;
  },
  login: (_, { name, password }, ctx) => {
    const user = db.find((currentUser) => currentUser.name === name);
    const isUserValid = user.password === password;

    if (!user || !isUserValid) {
      throw new AuthenticationError('Invalid name or password!');
    }

    ctx.req.session.token = jwt.sign({ username: name }, USER_SECRET);

    return user;
  }
}