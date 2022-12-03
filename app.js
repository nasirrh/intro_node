// const amount =8
// if(amount<10){
// console.log("small nu")
// }
// else{
//     console.log("large no")
// }
// console.log(__filename);
// setInterval(()=>{
//     console.log("hello")
// },1000);
// const name = require('./hello')
// const sayHii= require('./name')
// const data = require('./alternatives')
// require('./add')
// console.log(data);
// console.log(names)
// sayHii(name.john)
// sayHii("nasir")
// const os = require('os')
// const user = os.userInfo()
// console.log(user);
// console.log(`time in ${os.uptime()} `);
// const obj ={
//     name : os.type(),
//     release : os.release(),
//     totMem : os.totalmem(),
//     frreMem : os.freemem()
// }
// console.log(obj);
// const path = require('path')
// console.log(path.sep);
// const filePath = path.join('/content','text.txt');
// console.log(filePath);
// const base = path.basename(filePath)
// console.log(base);
// const absolute = path.resolve(__dirname,'content','text.txt')
// console.log(absolute);
const {readFile,writeFileSync, writeFile} =require('fs');
// const read = readFileSync('./content/text.txt','utf-8')
// // console.log(read);
// const write = writeFileSync('./content/nasir.txt',`hello :  ${read}`,{flag : 'a'})
// console.log(write);
console.log("stat");
readFile('./content/nasir.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return
}
        const first = result;
        readFile('./content/text.txt','utf-8',(err,result)=>{
            if(err){
                console.log(err);
                return
        }
        const second = result
        writeFile('./content/hello.txt',`here is the result : ${first},${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log("done with the task");
        }
        )
        })
})
console.log("starting next");