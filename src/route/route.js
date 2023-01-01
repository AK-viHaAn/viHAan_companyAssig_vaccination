const mongoose = require('mongoose')
const express = require('express')
const userController = require('../controller/userController')
const router = express.Router()



router.post("/register",userController.createUser)
router.post("/login",userController.login)
router.get("/userDetails",userController.getUserDetails)
router.get("/getUserDetailsByAdmin",userController.getUserDetailsByFilter)

router.get('/getTimeSlots',)
router.post ('/booktimeslot', )
router.put('/updateSlots',)
router.get("/getTimeSlotByAdmin",)




module.exports= router
