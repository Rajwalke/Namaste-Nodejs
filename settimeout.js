var a=1245;
var b=52015;

console.log("Hello World");
setTimeout(() => {
    console.log("first settimeout");
}, 0);

setTimeout(() => {
    console.log("second timeout");
}, 5000);
function multiply(x,y){
    const result=x*y;
    return result;
}

const c=multiply(a,b);

console.log("Multiplication is : ",c);

