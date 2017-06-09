module.exports = router => {
  router.get('/:id', async function (ctx, next) {
    ctx.body = await ctx.db.manual.find({
      include: [{
        attributes: ['step_num', 'title', 'body'],
        model: ctx.db.step
      }],
      where: {
        id: ctx.params.id
      }
    })
  })
}
