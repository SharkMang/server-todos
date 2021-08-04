require('dotenv').config();

const koa = require('koa');
const app = new koa();
const routes = require('./src/routes');

require('./src/models/connection')();

app.use(routes.routes());

app.listen(process.env.PORT, () => {
  console.log(`Server has been running on port ${process.env.PORT}.....`)
});