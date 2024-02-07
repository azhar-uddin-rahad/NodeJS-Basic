const express=require('express');
const app=express();
const mongoose = require('mongoose');
const Abc=require('./Model/createModel.js')
mongoose.connect('mongodb+srv://test_2024:0yaajY4aqUD7kaiP@cluster0.jmnkad8.mongodb.net/Node_2024?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.use(express.json())
app.listen(8800,function(){
    console.log('Express server is running');

});

app.get('/',function(req,res){
    res.send("welcome to Express");

});

// POST method route
/* app.post('/create', (req, res) => {
        const {name,password}=req.body;
        res.send({
            name : name,
            password:password
        })
  }) */

  app.post('/create',(req,res)=>{
    const {name,password}=req.body
    let data=new Abc({
      name:name,
      password: password
    })
    data.save()
    res.send(data)
  })