const express=require('express')
const app=express();

app.get('/',(req,res)=>{
    console.log('get method working')
    res.end()
})
app.post('/',(req,res)=>{
    console.log('post method working')
    res.end()
})

app.listen(3000,()=>{
    console.log('server is listeing')
});