const express=require('express');
const app=express();
const mongoose = require('mongoose');
mongoose.connect(mongodb+srv://<username>:<password>@cluster0.jmnkad8.mongodb.net/?retryWrites=true&w=majority)
  .then(() => console.log('Connected!'));

app.use(express.json())
app.listen(8800,function(){
    console.log('Express server is running');

});

app.get('/',function(req,res){
    res.send("welcome to Express");

});

// POST method route
app.post('/create', (req, res) => {
        const {name,password}=req.body;
        res.send({
            name : name,
            password:password
        })
  })