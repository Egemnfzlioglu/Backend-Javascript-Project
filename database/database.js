const mongoose = require("mongoose")

const PASSWORD = "LOagefZkgfKpip8M"
const DataName = "mern"
const Mongo = `mongodb+srv://jackfors5916:${PASSWORD}@cluster0.fdzsmul.mongodb.net/${DataName}?retryWrites=true&w=majority`

const MONGODB = async () => {
    await mongoose
        .connect(Mongo)
        .then(() => {
            console.log("Connection MongoDatabase")
        })
        .catch((error) => {
            console.log("Error MongoDatabase")
            console.log("error", error)
        })
}

module.exports = MONGODB