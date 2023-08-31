let mongoose =require("mongoose");


const userSchema =new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    contact:Number,
    address:String,
    gender:String
})

module.exports = mongoose.model("registration",userSchema);