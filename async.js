const https=require("https");
const fs=require("fs");

var a=1245;
var b=52015;


console.log("Hello World");

https.get("https://dummyjson.com/products/1",(res)=>{
    console.log("My ApI Call is executed sucssesfully");
})

setTimeout(()=>{
    console.log("hey Im SetTimeout");
},5000);

fs.readFile("./file.txt","utf8",(err,data)=>{
    console.log("File data : ",data);
});

function multiply(x,y){
    setTimeout(() => {
            console.log("hello in fn");
    }, 7000);

}

const c=multiply(a,b);

console.log("Multiplication is : ",c);

// Hello world
// c is print 
// data
// My ApI Call is executed sucssesfully
// hii im settimeout
// 