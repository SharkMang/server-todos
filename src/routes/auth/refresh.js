const jwt = require('jsonwebtoken');

const { resolve } = require('../../utils');
const { isValidRefreshToken, createToken, createRefreshToken } = require('../../services/auth')
const { secretKey } = require('../../config');

const refresh = async (ctx) => {
  const { token, refreshToken } = ctx.request.body;

  try {
    const { userId } = jwt.verify(token, secretKey, { ignoreExpiration: true })

    const isValidRefresh = await isValidRefreshToken({ userId, refreshToken })

    if (isValidRefresh) {
      const body = {
        refreshToken: await createRefreshToken(userId),
        token: await createToken(userId),
        message: "Successfully logged in!"
      }

      return resolve(ctx, body);
    }
    throw {}
  } catch (error) {
    return ctx.throw(400, 'Not authorizated')
  }
}

module.exports = refresh;