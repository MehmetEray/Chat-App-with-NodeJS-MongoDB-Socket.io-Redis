var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('chat'); //.render => sayfa render etmek icin
  //.send => ekrana basmak icin
});

module.exports = router;
