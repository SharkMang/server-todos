const PORT = 3001;

const koa = require('koa');
const app = new koa();
const routes = require('./src/routes');

// const config = require('./src/config');
require('./src/models/connection')()

app.use(routes.routes());

app.listen(PORT, () => {
  console.log(`Server has been running on port ${PORT}.....`)
});