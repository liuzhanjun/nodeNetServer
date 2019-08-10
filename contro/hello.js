
function add(a,b) {
    return a+b;
}
function hello(){
    var name;
    var age;
    this.setName=function (name) {
        this.name=name
    }
    this.setAge=function (age) {
        this.age=age
    }

}
module.exports=hello