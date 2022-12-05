import mongoose from "mongoose";

const userlogSchema=new mongoose.Schema({
    
    email:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }

},{timestamps:true})

const userLog = mongoose.model("userLog", userlogSchema)

export default userLog