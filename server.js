const http=require("node:http");

const server=http.createServer((req,res)=>{
    if(req.url === "/getsec"){
        res.end("Secreate data is not here");
    }
    res.end("Namaste React");
});

server.listen(7777);