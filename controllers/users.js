let users = async (ctx, next) => {
  ctx.body = 'this is a users response!'
}

module.exports = {
  'Get /users': users
}
