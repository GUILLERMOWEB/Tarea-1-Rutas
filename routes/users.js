
const express = require("express")
const { users } = require("../controllers/usersController")
const router = express.Router()



router.get('/usuario', users)





  module.exports = router  