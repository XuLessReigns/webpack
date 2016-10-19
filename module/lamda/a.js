
var module = (function(){
    var a =1;
    var b=1;

    function test(){
        return a;
    }

    function  testb(){
        return b;
    }

    return {
        t1:test,
        t2:testb
    }
})();

alert(module.t1());