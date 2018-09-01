import Koa from'koa';
import router from './router/index';
import koaBody from 'koa-body';
import cors from '@koa/cors';

const app = new Koa();

app.use(cors());
app.use(koaBody({
  multipart: true
}));
app.use(router.routes());
app.use(router.allowedMethods());


app.listen(3000, () => {
  console.log('listening: localhost:3000');
});