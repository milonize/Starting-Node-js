const express=require('express')
const app=express();

app.use(express.json());

app.get('/',(req,res)=>{
    console.log('get method working')
    res.send('Hello get method')
})
app.post('/',(req,res)=>{
    console.log(req.body)
    res.send('Hello post method')

})

app.listen(3000,()=>{
    console.log('server is listeing')
});