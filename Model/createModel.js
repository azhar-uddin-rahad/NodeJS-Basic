const mongoose=require("mongoose");
const {Schema}=mongoose;

const createModel=new Schema({
    name: String,
    password: String
})
module.exports=mongoose.model("Abc",createModel)
