
 var $col_1 = $("#col_1"); 
 var $col_2 = $("#col_2");
$(document).ready(function{
	var col1 = $col_1;
    var col2 = $col_2;
    var height = 0;
    if(col1.height() >= col2.height()){
    	height=col1.height();
    	alert(height);
    }else{
    	height=col2.height();
    	alert(height);

    }


});


var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/history', function(req, res, next) {
  res.render('history', { title: 'Express' });
});

module.exports = router;
