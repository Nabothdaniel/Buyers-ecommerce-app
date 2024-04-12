const EventEmitter = require('events');
//const eventEmitter = new EventEmitter();

class Item extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let item1 = new Item('sugar');

    item1.on('itemsAdded',()=>{
    console.log(`${item1.name} has been sucessfully added`)
})

item1.emit('itemsAdded');