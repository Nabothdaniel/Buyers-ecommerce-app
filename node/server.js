const fs = require('fs');

/**fs.mkdir('tests',(err)=>{
    if(err)
    console.log(err)
    else{
        fs.writeFile('./tests/example.txt','the lifestyle cost na you no know',(err)=>{
            if(err)
            console.log(err);
            else
            console.log('file update sucessfully');
        });
    }
});**/

fs.readdir('../node',(err,files)=>{
    if(err)
    console.log(err)
else{

    files.forEach(file =>{console.log('file sucessfully read',file)})
    console.log(files)
}
})




//const Test = require('./Test');

/**console.log(Test.sum(1,215));
console.log(new Test.person());
console.log(Test.PI);

// 
const http = require('http');

let dateTime = require('./Day');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(`welcome to my world ${dateTime()}`);
}).listen(4000)
console.log('my first node js program');
/**eventEmitter.on('fired',(a,b)=>{
    console.log('events has been fired');
    console.log(a * b)
})

eventEmitter.emit('fired',50,20)**/

