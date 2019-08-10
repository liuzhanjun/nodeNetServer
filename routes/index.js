var express = require('express');
var url=require("url")
var querystring=require("querystring")
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var query=url.parse(req.url).query;
  var parms=querystring.parse(query);

  res.render('index', { title: ""+parms.name+"======"+parms.tag+"===="+__filename });


});

module.exports = router;
