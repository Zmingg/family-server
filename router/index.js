import Router from 'koa-router';
import User from '../models/User';

const router = new Router();
const user = new User();

const routes = [
  {path: '/users', method: 'get', handle: user.findUsers},
  {path: '/session', method: 'post', handle: user.createSession},
];

routes.map(route => {
  router[route.method](route.path, route.handle);
});

export default router;
