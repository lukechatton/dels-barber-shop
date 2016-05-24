

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: "Del's Barber Shop" });
});

router.get('/history', function(req, res, next) {
  res.render('history', { title: 'Express' });
});

module.exports = router;
