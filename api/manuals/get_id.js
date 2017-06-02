module.exports = router => {
  router.get('/:id', async function (ctx, next) {
    ctx.body = await ctx.db.manual.findAll({
      where: {
        id: ctx.params.id
      }
    })
  })
}
