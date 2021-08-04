const jwt = require('koa-jwt');
const secretKey = process.env.AUTH_SECRET_KEY;

const isAuthenticated = (secret = secretKey) => jwt({ secret  });

const errorsHandler = async (ctx, next) => {
  try{
    await next()
  } catch(e) {
    ctx.status = e.status || 500;
    ctx.body = { error: e.message || 'Internal server Error.' }
  }
};

module.exports = {
  isAuthenticated,
  errorsHandler
};