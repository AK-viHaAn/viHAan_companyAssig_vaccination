const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    admin: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    }
},
    { timestamps: true }
)


module.exports = mongoose.model("admin", adminSchema)
