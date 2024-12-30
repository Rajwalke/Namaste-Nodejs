const crypto=require("crypto");


crypto.pbkdf2("password12334","salt",500000,50,"sha512",(err,data)=>{
    console.log("1 key is genreated");
})
crypto.pbkdf2("password12334","salt",500000,50,"sha512",(err,data)=>{
    console.log("2 key is genreated");
})
crypto.pbkdf2("password12334","salt",500000,50,"sha512",(err,data)=>{
    console.log("3 key is genreated");
})
crypto.pbkdf2("password12334","salt",500000,50,"sha512",(err,data)=>{
    console.log("4 key is genreated");
})
crypto.pbkdf2("password12334","salt",500000,50,"sha512",(err,data)=>{
    console.log("5 key is genreated");
})