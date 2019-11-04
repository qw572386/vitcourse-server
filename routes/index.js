const router = require('koa-router')()
const carousel = require('./carousel')
const tags = require('./tags')
const category = require('./category')
const lesson = require('./lesson')
const types = require('./types')
const user = require('./users')
module.exports =  (app) => {
  carousel(router);
  tags(router);
  category(router);
  types(router);
  lesson(router);
  user(router);
  app.use(router.routes())
    .use(router.allowedMethods())
    .use(ctx => {
      ctx.status = 404;
    })
}
