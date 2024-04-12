const express=require('express');
const multer=require('multer');
const app=express();
app.set('view engine','ejs');
const destination='./uploads/'
const fileUpload=multer({
    dest:destination,
})

// app.use(express.json());


app.get('/',(req,res)=>{
res.render('ajax-view');
})
app.post('/ajax-submit',fileUpload.single('images'), (req,res)=>{
    // console.log(req.body)
    res.send('Your data send in the server successfully')

})

app.listen(3000,()=>{
    console.log('server is listeing')
});