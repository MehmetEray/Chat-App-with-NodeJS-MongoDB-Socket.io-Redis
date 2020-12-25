var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(1 === 0)
    res.render('index', { title: 'Express' });
  else 
    res.redirect('chat');
});

module.exports = router;
