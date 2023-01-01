const mongoose = require('mongoose')

const slotSchema = new mongoose.Schema({
    
        date: {
            type: String
        },
        time: {
            type: String
        },
        userId: {
            type: [ObjId],
            ref: 'user'
        }

    }, { timestamps: true }
)


module.exports= mongoose.model("slot",slotSchema)





