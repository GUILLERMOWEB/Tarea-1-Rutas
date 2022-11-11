const express = require("express")
const { sumar, division, parImpar } = require("../controllers/mathsController")


const router = express.Router()



router.get('/sumar/:num1/:num2', sumar)


router.get('/dividir/:num1/:num2', division)

router.get('/numero', parImpar)



  module.exports = router  