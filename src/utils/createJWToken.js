const jwt = require('jsonwebtoken');
const secretKey = process.env.AUTH_SECRET_KEY;
const expForToken = Math.floor(Date.now() / 1000) + (60 * 240);

const createToken = async (id) => {
  const token = jwt.sign(
    {
      userId: id,
      exp: expForToken
    }, secretKey);
  return token;
}

module.exports = createToken;
