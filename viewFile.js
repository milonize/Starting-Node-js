const fileSystem=require('fs')
const filePath=require('path')
const http=require('http')
const querystring=require('querystring')

const server=http.createServer((req,res)=>{
if(req.method==='POST' && req.url==='/submit'){
    
    console.log(req.data)
    res.end('data submited');

}else if(req.method==='GET' && req.url==='/'){
    const viewFile=filePath.join(__dirname,'viewFile.html')
    fileSystem.readFile(viewFile,(err,data)=>{
if(err){
    res.writeHead(404);
    res.end("Error: File not found");
}else{
res.writeHead(200,{'Content-Type':'text/html'});
res.end(data);
}
    })

}else{
    console.log('unknown')
    res.end('access expire');

}
 
})

server.listen(4004);
console.log('Port number 4004 are listening...')