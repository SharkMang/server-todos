import jwt from 'jsonwebtoken'
import { secretKey, expForToken } from '../../config'

export const createToken = (id: number) => jwt.sign(
  {
    userId: id,
    exp: expForToken
  }, secretKey!
)

