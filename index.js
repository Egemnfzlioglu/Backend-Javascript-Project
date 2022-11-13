const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const MONGODB = require("./database/database.js")
const userRouter = require("./routes/userRoutes")
const postRouter = require("./routes/postRoutes")

const app = express()

/*
 morgan("dev") => developer bölümde işlemleri 
ve ms cinsinden zamanı gösteriyor gösteriyor... ÇOK İYİ:)
*/

app.use(morgan("dev"));
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.get("/", (req, res) => {
    res.send("Hello")
})

// http://localhost:5000/users/register
app.use("/users", userRouter)
app.use("/post", postRouter)

















// SafeArea ===============================================================

const PORT = 5000 || process.env.PORT

MONGODB()

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})
