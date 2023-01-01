const userModel = require('../model/userModel')
const slotModel = require('../model/slotModel')


const bookSlot = async function (req,res){
    try {
        let data = req.body
        let {id, date, time} = data

        let user = await userModel.findById(id)

        if (!user) return res.status(404).send({status: false, message: 'User id not found'})

        let checkSlot = await slotModel.findOne({date: date, time: time})

        if (checkSlot.userId.length > 10) {
            return res.status(400).send({status: false, message: 'This time slot is already booked, try to book another slot'})
        }

        await slotModel.updateOne({_id: checkSlot._id}, {$set: {userId: checkSlot.userId.push(id)}})

        res.status(201).send({status: false, message: 'Time slot booked, be there in time'})
    }
    catch (error) {
        res.status(500).send({status: false, message: error.message})
    }
}


module.exports.bookSlot=bookSlot