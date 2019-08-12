
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://liuzhanjun:104326@localhost:27017/my_test_node";


function mongdbutils(){


    //  this.insertData=function(data,callback) {
    //     MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    //         if (err) throw err;
    //         var dbo = db.db("my_test_node");
    //         var myobj = { name: "菜鸟教程", url: "www.runoob",age:25 };
    //         dbo.collection("banks").insertOne(data, function(err, res) {
    //             if (err) throw err;
    //             console.log("文档插入成功");
    //             callback("文档插入成功")
    //             db.close();
    //         });
    //     });
    // }

    var age;
    this.setAge=function (age) {
        this.age=age
    }
}

module.exports=mongdbutils



