export const secretKey = process.env.AUTH_SECRET_KEY!
export const expForToken = Math.floor(Date.now() / 1000) + (60 * 120)
export const expForRefreshToken = Math.floor(Date.now() / 1000) + (60 * 24 * 60 * 60)
