

const express = require("express")
const router = express.Router()

const {ejemploPost,ejemploBody } = require("../controllers/postController")



router.post('/crear', ejemploPost)

router.get('/body', ejemploBody)




  module.exports = router  