const fileSystem=require('fs')
const filePath=require('path')
const http=require('http')


const server=http.createServer((req,res)=>{
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
 
})

server.listen(4004);
console.log('Port number 4004 are listening...')