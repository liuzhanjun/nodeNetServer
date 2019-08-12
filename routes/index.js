var express = require('express');
var url = require("url")
var querystring = require("querystring")
var router = express.Router();
var reqInfo = require("../public/javascripts/reqInfo.js")
var mongoConn = require("../public/javascripts/mongoConn.js")
var dbutils = require("../public/javascripts/dbutils.js")
/* GET home page. */
router.get('/', function (req, res, next) {
    var query = url.parse(req.url).query;
    var parms = querystring.parse(query);
    console.log("================")
    console.log(parms)
    console.log("================")


    var dbutils_ = new dbutils();
    var jsobj = {name: parms.name, age: Number(parms.age)}
    dbutils_.insertData(jsobj, function (msg) {
        console.log("msg=" + msg)
    })


    res.send("========success===============")
});
router.post("/", function (req, res, next) {

})

module.exports = router;
