const PostModel = require("../models/PostModels")



const createPost = async (req, res) => {
    const post = req.body

    const newPost = new PostModel({
        ...post,
    })

    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(404).json({ message: "Something Went Wrong" })
    }
}


const getPostAll = async (req, res) => {
    try {
        const postAll = await PostModel.find()
        res.status(200).json(postAll)
    } catch (error) {
        res.status(404).json({ message: "Something Went Wrong" })

    }
}





module.exports = {
    createPost,
    getPostAll,
}












