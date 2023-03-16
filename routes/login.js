const express = require('express')
const router = express.Router()

const scheema = require("../model/scheema");

router.get('/',(req,res)=>{
    scheema.insertMany({username:"dasd",password:"adasd"})
})


module.exports = router
