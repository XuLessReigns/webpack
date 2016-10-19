
(function (){

    var a =0;

    function Person(n,a){
        this.name =n;
        this.age =a;
    }

    Person.prototype.getName = function(){
        return this.name;
    }

    window.Person= Person;


})();


var p = new Person("zhangsan","23");
alert(a);