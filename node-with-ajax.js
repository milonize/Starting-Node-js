const express=require('express')
const app=express();
app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true }));

app.use(express.json());


app.get('/',(req,res)=>{
res.render('ajax-view');
})
app.post('/ajax-submit',(req,res)=>{
    console.log(req.body)
    res.send('Your data send in the server successfully')

})

app.listen(3000,()=>{
    console.log('server is listeing')
});