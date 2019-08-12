var express = require('express');
var router = express.Router();
var hello=require('../contro/hello.js')
var db=require("../public/javascripts/dbutils.js")
/* GET users listing. */
router.get('/',function (req, resq, next) {
    // var s=hello.add(1,2);
    hello1=new hello();
    hello1.setName("xxxss3xxxxx")
    var dbs=new db();
   dbs.queryAll(function (result) {
       console.log("=========================")
       console.log(result)
       console.log(result[0]._id)
   })
    resq.send("========"+hello1.name+"===============")



})
module.exports = router;
