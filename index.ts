import * as Koa from 'koa';
import router from './router/index';
import * as koaBody from 'koa-body';

const app = new Koa();

app.use(koaBody({
  multipart: true
}));
app.use(router.routes());
app.use(router.allowedMethods());


app.listen(3000, () => {
  console.log('listening: localhost:3000');
});
