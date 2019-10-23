const router = require('koa-router')()
const carousel = require('./carousel')
const tags = require('./tags')
const category = require('./category')
const user = require('./users')
module.exports =  (app) => {
  carousel(router);
  tags(router);
  category(router);
  user(router);
  app.use(router.routes())
    .use(router.allowedMethods())
    .use(ctx => {
      ctx.status = 404;
    })
}
