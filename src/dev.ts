import Koa from 'koa';
import Router from 'koa-router';

function dev() {
  const app = new Koa();
  const router = new Router();
  router.get('/1', (ctx, next) => {
    ctx.cookies.set('jimao', '1234');
    ctx.body = '哈哈';
  });
  router.get('/2', (ctx, next) => {
    ctx.body = ctx.cookies.get('jimao') || '空';
  });
  app
    .use(router.routes())
    .use(router.allowedMethods());
  app.listen(3000);
}

dev();
