const { createToken, checkAndDeckodToken } = require("./koaJwt");



const isAuthenticated = (req,res) => {
 console.log(res);
};



module.exports = {
  isAuthenticated,
  createToken,
  checkAndDeckodToken
}