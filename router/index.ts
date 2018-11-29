import * as Router from 'koa-router';
import User from '../models/User';
import Article from '../models/Articles';

const router = new Router();

const routes = [
  {path: '/session', method: 'post', handle: User.createSession},
  {path: '/users', method: 'get', handle: User.findUsers},
  {path: '/articles', method: 'get', handle: Article.findArticles},
];

routes.map(route => {
  router[route.method](route.path, route.handle);
});

export default router;
