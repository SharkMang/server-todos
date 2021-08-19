const jwt = require('koa-jwt');
const { secretKey } = require('../config')

const isAuthenticated = (secret = secretKey) => jwt({ secret  });

const errorsHandler = async (ctx, next) => {
  try{
    await next()
  } catch(e) {
    ctx.status = e.status || 500;
    ctx.body = { error: e.message || 'Internal server Error.' }
    return ctx
  }
};

module.exports = {
  isAuthenticated,
  errorsHandler
};