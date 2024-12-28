const fs=require("fs");
const a=100;

setImmediate(()=>console.log("setImmediate"));

setTimeout(()=>console.log("timer expired"),0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt","utf8",()=>{
    setImmediate(()=>console.log("2nd setImmediate"));

    setTimeout(()=>console.log("2n timer expired"),0);

    process.nextTick(()=>console.log("2nd Process.Next.tick"))

    console.log("File Reading CB");
});

process.nextTick(()=>console.log("Process.Next.tick"));

console.log("Last line of the file");
