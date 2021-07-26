const { createToken, checkAndDeckodToken } = require("./koaJwt");

const isAuthenticated = (req,res) => {
 
};



module.exports = {
  isAuthenticated,
  createToken,
  checkAndDeckodToken
}