import Koa from 'koa';
import Router from 'koa-router';

function dev() {
  const app = new Koa();
  const router = new Router();
  router.get('/1', (ctx, next) => {
    ctx.cookies.set('jimao', '1234');
    console.log('哈哈');
    ctx.body = '哈哈';
  });
  router.get('/2', (ctx, next) => {
    console.log('呼呼', ctx.cookies.get('jimao'));
    ctx.body = '呼呼';
  });
  app
    .use(router.routes())
    .use(router.allowedMethods());
  app.listen(3000);
}

dev();
