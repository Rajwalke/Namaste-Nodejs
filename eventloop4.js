const fs=require("fs");
// const a=100;

setImmediate(()=>console.log("setImmediate"));

setTimeout(()=>console.log("timer expired"),0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt","utf8",()=>{
    console.log("file is read");
})

process.nextTick(()=>{
    // process.nextTick(()=>console.log("inner nexttick"));
    setImmediate(()=>console.log("setImmediate inner"));

    console.log("nexttick")
});

console.log("last line of the file");




// last line 
// nexttick
// promise
// time expre
// setimmedate
// setimmedateinner
// file read