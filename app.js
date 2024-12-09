// require("./xyz.js")
// const {sumcal,x}=require("./sum")
// import { x } from "./sum.js";
// const {sumcal}=require("./calculate/sum")
const {multiplye,subtraction,sumcal}=require("./calculate")
const data=require("./data.json")
var named="Namste Node JS";

var num1=10;
var num2=50;

sumcal(num1,num2);
subtraction(num1,num2);
multiplye(num1,num2);
console.log(data);
// console.log("x value from app",x);
// console.log(named,number+num2);
// console.log(this);
// console.log(window)
// console.log(globalThis)
