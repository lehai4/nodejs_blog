class NewsController {
  // [GET]/news
  index(req, res) {
    return res.render('news');
  }
  // [GET]/news/:slug
  show(req, res) {
    res.send('NEW DETAIL!!!');
  }
}
module.exports = new NewsController();
