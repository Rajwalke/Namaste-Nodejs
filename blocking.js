const crypto=require("crypto");

console.log("hell world");

var a=654;
var b=6525;
// pbkdf2 is stand for password base key deravtive function 
crypto.pbkdf2Sync("password12334","salt",5000000,50,"sha512");
console.log("fisrt password")

crypto.pbkdf2("password12334","salt",500000,50,"sha512",(err,data)=>{
    console.log("second key is genreated");
})
function multiply(x,y){
    const result=x*y;
    return result;
}

const c=multiply(a,b);

console.log("Multiplication is : ",c);
