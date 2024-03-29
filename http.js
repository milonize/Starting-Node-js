const http = require('http')

const server =http.createServer((req,res)=>{

if(req.url==='/access'){
    res.write('access clear')
    res.end()
}else{
    res.write('access worng')
    res.end()
}

});

server.listen(4002);
console.log('server port 4002 in working...')