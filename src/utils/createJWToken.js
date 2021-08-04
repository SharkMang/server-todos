const jwt = require('jsonwebtoken');
const secretKey = process.env.AUTH_SECRET_KEY;

const createToken = async (id) => {

  const token = jwt.sign(
    {
      userId: id,
      //exp: Math.floor(Date.now() / 1000) + (60 * 120)
    }, secretKey);
  return token;
}

module.exports = createToken;
