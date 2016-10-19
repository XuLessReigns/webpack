/**
 * Created by xuyan on 2016/10/18.
 */
(function(){

    function Student(mj){
        this.major = mj;

        Person.call(this,"zhangsan","23");

    }


    Student.prototype = new Person();
    Student.prototype.learnEnglish = function(){
        return this.major;
    }

})()