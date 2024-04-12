const fs = require('fs');

fs.writeFile('example.js','const sum = (a,b) => a + b',(err)=>{
   if(err)
   console.log('error soemthing happened',err)
   else{
   console.log('file sucessfully created');
       fs.readFile('example.js','utf-8',(err,file)=>{
           if(err)
           console.log(err)
           else
           console.log(file,'\n file read sucessfully')
       })
   }
})

fs.rename('example2.jsx','example2.js',(err)=>{
   if(err)
       console.log(err);
   else
   console.log('file sucessfully renamed');
})

fs.appendFile('example2.js','let greeting = "hello world the my computer" \n',(err)=>{
   if(err)
   console.log(err)
   else
   console.log('file sucessfully appended');
})

fs.unlink('example2.js',(err)=>{
 if(err)
   console.log(err)
 else
 console.log('file deleted sucesfully');
})