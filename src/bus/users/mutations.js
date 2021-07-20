// Core
import { AuthenticationError } from "apollo-server-express";
import jwt from 'jsonwebtoken';

// Secrets
import { USER_SECRET } from "../../init/config";

// PubSub
import { pubSub } from "../../init/pubSub";
import { events } from "./events";

import { db } from './db'

export const mutations = {
  signUp: (_, user) => {
    db.push(user);

    pubSub.publish(events.USER_ADDED, {
      userAdded: user
    });

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