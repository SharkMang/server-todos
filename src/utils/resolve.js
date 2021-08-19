const resolve = (ctx, body = {message: 'Success'}) => {
  ctx.status = 200;
  ctx.body = body;
  return ctx;
}

module.exports = {
  resolve
};