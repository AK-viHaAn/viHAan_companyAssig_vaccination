const express = require('express')
const app = express()
const route = require('./route/route.js')
const mongoose = require('mongoose')

app.use(express.json())
mongoose.set('strictQuery', true);

mongoose.connect('mongodb+srv://viHaAn:vihaan@cluster0.tznueha.mongodb.net/CO-VID',{
    useNewUrlParser: true 
})
.then( ()=> console.log('mongoDB connected'))
.catch ( err => console.log(err) )


app.use('/', route)

app.listen( 3000, function () {

    console.log('Apna server ' + 3000 + ' pe chal rha hai or')

});