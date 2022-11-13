const mongoose = require("mongoose")

const PostSchema = mongoose.Schema({
    title: String,
    description: String,
    name: String,
    creator: String,
    tags: [String],
    imageFile: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    likeCount: {
        type: Number,
        default: 0
    }
})

const PostModel = mongoose.model("post", PostSchema)

module.exports = PostModel

