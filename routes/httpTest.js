var express = require('express');
var router = express.Router();
var hello=require('../contro/hello.js')
var db=require("../public/javascripts/dbutils.js")
var encryption=require("../public/javascripts/encryption")
/* GET users listing. */
router.get('/',function (req, resq, next) {
    // var s=hello.add(1,2);
   //  hello1=new hello();
   //  hello1.setName("xxxss3xxxxx")
   //  var dbs=new db();
   // dbs.queryAll(function (result) {
   //     console.log("=========================")
   //     console.log(result)
   //     console.log(result[0]._id)
   // })
    var en=new encryption()
    var str=en.encryptinof("1043261503")
    var valuex=en.decryptinof(str);


    //AES加解密

    resq.send("========"+str+"-------------"+valuex)



})
module.exports = router;
