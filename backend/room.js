let mongoose =require("mongoose");


const userSchema =new mongoose.Schema({
    rno:String,
    price:Number,
    image:String,
    type:String,
    status:String
})

module.exports = mongoose.model("room",userSchema);