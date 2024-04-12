// importing  the readline module
const readLine = require('readline')

// creating an interface with the imported module

const ReadLine =  readLine.createInterface({input:process.stdin,output:process.stdout});

//creating two random numbers 
const num1 = Math.floor((Math.random() * 10) + 1);

const num2 = Math.floor((Math.random() * 10) + 1);
// store the number in a answer variable
let answer = num1 + num2;

ReadLine.question(`what is the sum of ${num1} + ${num2}? \n`,(userInput)=>{
    if(userInput.trim() == answer ){
        ReadLine.close();
    }else{
        ReadLine.setPrompt('incorrect answer please try again \n');
        ReadLine.prompt();
        ReadLine.on('line',(userInput)=>{
            if(userInput.trim() == answer){
                ReadLine.close();
            }else{
                ReadLine.setPrompt(`your answer of ${userInput} is incorrect try again \n`);
                ReadLine.prompt();
            }
        })
    }
});
ReadLine.on('close',()=>{console.log('Eureka !!!! you are correct')})
