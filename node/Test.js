const sum = (sum1,sum2)=> sum1 - sum2 ;

class Person {
    constructor(name){
        this.name = name;
        console.log('object created');
    }
    get Name(){
        console.log(this.name)
    }
}
new Person('daniel')
const PI = 3.14;

module.exports = {sum:sum,person:Person,PI:PI}