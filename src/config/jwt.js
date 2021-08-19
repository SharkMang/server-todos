const secretKey = process.env.AUTH_SECRET_KEY;
const refreshSecretKey = process.env.REFRESH_SECRET_KEY;
const expForToken = Math.floor(Date.now() / 1000) + (60 * 120);
const expForRefreshToken = Math.floor(Date.now() / 1000) + (60 * 24 * 60 * 60); 

module.exports = {
  secretKey,
  refreshSecretKey,
  expForToken,
  expForRefreshToken
}