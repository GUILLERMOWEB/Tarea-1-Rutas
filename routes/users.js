
const express = require("express")
const router = express.Router()

const { users } = require("../controllers/usersController")



router.get('/usuario', users)





  module.exports = router  