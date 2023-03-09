class ProductController {
  //[GET]/product
  product(req, res, next) {
    res.render('products');
  }
  productDetails(req, res, next) {
    res.render('productDetail');
  }
}
module.exports = new ProductController();
