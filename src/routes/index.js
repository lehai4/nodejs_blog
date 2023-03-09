const newsRouter = require('./news');
const siteRouter = require('./site');
const productRouter = require('./product');

function route(app) {
  app.use('/news', newsRouter);

  app.use('/products', productRouter);
  app.use('/', siteRouter);
}
module.exports = route;
