const express = require("express")

const router = express.Router()

const { createPost, getPostAll } = require("../controllers/postController")




router.get("/", getPostAll)

router.post("/", createPost)




module.exports = router








