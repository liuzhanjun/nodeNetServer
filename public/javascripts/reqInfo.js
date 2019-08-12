var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://liuzhanjun:104326@localhost:27017/my_test_node";
function reqinfo() {
    var name;
    var age;

    this.setName=function setName(name) {
        this.name = name;
    }

    this.setAge=function (age) {
        this.age = age;
    }
}
module.exports=reqinfo;