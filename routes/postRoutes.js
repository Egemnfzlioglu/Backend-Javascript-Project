const express = require("express")

const router = express.Router()

const { createPost, getPostAll } = require("../controllers/postController")

const auth = require("../middleware/authMiddleware")


router.get("/", getPostAll)


router.post("/",
    auth,
    createPost)




module.exports = router








