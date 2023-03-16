const express = require('express')
const app = express()

const loginRouter = require('./routes/login')



require('mongoose').connect('mongodb://127.0.0.1:27017')



const path = require('path');
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use('/',loginRouter)



app.listen(3000, () => {
    console.log("server started");
})