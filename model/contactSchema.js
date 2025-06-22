import mongoose from "mongoose";

const contactScheema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , "Name is Required"]
    },
    email : {
        type : String,
        required : [true , "Email is Required"],
        unique :[true , "Email is Already Exists"]

    },
    message : {
        type : String,
        required : [true , "Message is required "]
    }
} , {
    timestamps : true
})

const contactUs = mongoose.model('ContactUs' , contactScheema)
export default contactUs