import * as Router from 'koa-router';
import User from '../models/User';

const router = new Router();

const routes = [
  {path: '/users', method: 'get', handle: User.findUsers},
  {path: '/session', method: 'post', handle: User.createSession},
];

routes.map(route => {
  router[route.method](route.path, route.handle);
});

export default router;
