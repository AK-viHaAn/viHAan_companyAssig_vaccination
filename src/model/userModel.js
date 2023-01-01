const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {type:String,
        required: true},
    age : {type:Number,
        required: true},
    phoneNumber : {type:Number,
        required: true},
    pinCode : {type:Number,
        required: true},
    aadhar : {type:Number,
        required: true},
    password : {type:String,
        required: true},
    vaccinationStatus :{
        type : String,
        enum : ['none','First Dose Completed','All Completed'],
        default : "none"
    }
},
{timestamps: true}
)


module.exports= mongoose.model("user",userSchema)






