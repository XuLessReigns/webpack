/**
 * Created by xuyan on 2016/10/18.
 */
define(function(require,exports,module){
    var a = require("./a");

    function test2(){
        return a.t1()
    }

    module.exports = {
        t2:test2
    }
})