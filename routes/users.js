module.exports =  (router) => {
  router.get('/userinfo', async function (ctx, next) {
    ctx.body = 'this a users response!';
  })
}
