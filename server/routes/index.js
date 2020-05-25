// @ts-check

import welcome from './welcome';
import users from './users';
import session from './session';
import profile from './profile';

const controllers = [
  welcome,
  users,
  session,
  profile
];

export default (app) => controllers.forEach((f) => f(app));
