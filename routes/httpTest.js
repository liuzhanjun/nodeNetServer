var express = require('express');
var router = express.Router();
var hello=require('../contro/hello.js')
/* GET users listing. */
router.get('/',function (req, resq, next) {
    // var s=hello.add(1,2);
    hello=new hello();
    hello.setName("xxxxxxxx")
    resq.send("========"+hello.name+"===============")
})
module.exports = router;
