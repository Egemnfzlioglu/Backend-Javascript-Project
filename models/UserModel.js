const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: false,
    },
    googleId: {
        type: String,
        require: false,
    },
    id: {
        type: String,
        require: false,
    },
})

module.exports = mongoose.model("User", UserSchema)




