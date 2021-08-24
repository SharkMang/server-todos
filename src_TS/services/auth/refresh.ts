import bcrypt from 'bcrypt'
import { RefreshToken } from '../../models'

export const createRefreshToken = async (userId: number): Promise<string> => {
  
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

export const isValidRefreshToken = async ({ userId, refreshToken: reqRefreshToken }: { userId: number; refreshToken: string; }): Promise<boolean> => {
  const refreshTokenRow = await RefreshToken.query().findOne({ userId })

  if (refreshTokenRow) {
    const isRefreshTokenCorrect = await bcrypt.compare(reqRefreshToken, refreshTokenRow.refreshToken)

    return isRefreshTokenCorrect
  } else {
    return false
  }
}