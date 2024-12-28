const fs=require("fs");
const a=100;
setImmediate(()=>console.log("setImmediate"));

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt","utf8",()=>{
    console.log("file is read");
})

setTimeout(()=>{
    console.log("timer expired");
},0)
process.nextTick(()=>{
    console.log("Process.Nextt.ick");
})

function printA(){
    console.log("a=",a);
}

printA();
console.log("Last line of file");