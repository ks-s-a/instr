module.exports = router => {
  router.get('/', async function (ctx, next) {
    ctx.body = await ctx.db.manual.findAll({})
  })
}
