
var a = require("./A");

function testB(){
    return a.t1() + "-----" + "testb";
}


module.exports = {
    t2:testB
}