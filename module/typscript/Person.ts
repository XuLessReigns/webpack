/**
 * Created by xuyan on 2016/10/18.
 */

class Person{
    private name:string="zhangsan";

    public getName():string {
        return this.name;
    }
}


//c#+java
class Student implements Person {
    name:string;

    getName():string {
        return undefined;
    }

}