const bcrypt = require('bcrypt')

const { RefreshToken } = require('../../models')
// const { refreshSecretKey } = require('../../config')

const createRefreshToken = async (userId) => {

  const salt = await bcrypt.genSalt(10);
  const refreshToken = await bcrypt.genSalt(10);
  const refreshTokenHash = await bcrypt.hash(refreshToken, salt);
  const reshreshTokenRow = await RefreshToken.query().findOne({ userId })

  if (reshreshTokenRow) {
    await RefreshToken.query().findOne({ userId }).patch({ refreshToken: refreshTokenHash })
  } else {
    await RefreshToken.query().insert({
      userId,
      refreshToken: refreshTokenHash
    })
  }

  return refreshToken
}

const isValidRefreshToken = async ({ userId, refreshToken: reqRefreshToken }) => {

  const refreshTokenRow = await RefreshToken.query().findOne({ userId })

  if (refreshTokenRow) {
    const isRefreshTokenCorrect = await bcrypt.compare(reqRefreshToken, refreshTokenRow.refreshToken)

    return isRefreshTokenCorrect
  } else {
    return false
  }
}

module.exports = {
  createRefreshToken,
  isValidRefreshToken
}