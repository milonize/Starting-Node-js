const fs=require('fs')
const streamText=fs.createReadStream(`${__dirname}/data.txt`)

streamText.on('data',(chunk)=>{
    console.log(chunk.toString())
})


