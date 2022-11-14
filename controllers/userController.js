const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const UserModel = require("../models/UserModel")

const secretKey = "Egemen"




// SafeArea ===============================================================

const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const oldUser = await UserModel.findOne({ email })

        if (!oldUser) {
            return res.status(404).json({ message: "User Does Not Exist" });
            // User Does Not Exist = Kullanıcı yok
        }

        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password)

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid Credentials" })
            // Invalid Credentials = Geçersiz kimlik bilgileri
        }

        const token = jwt.sign(
            { email: oldUser.email, id: oldUser.id },
            secretKey,
            { expiresIn: "1h" }
        )
        res.status(200).json({ result: oldUser, token })

    } catch (error) {
        res.status(500).json({ message: "Something Went Wrong" })
        console.log(error)
        // Something Went Wrong = Bir şeyler yanlış gitti
    }
}


// SafeArea ===============================================================
const register = async (req, res) => {
    const { email, password, firstName, lastName } = req.body

    try {
        const oldUser = await UserModel.findOne({ email })

        if (oldUser) {
            return res.status(400)
                .json({ message: "user already exists" })
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        const result = await UserModel.create({
            email,
            password: hashedPassword,
            name: `${firstName} ${lastName}`,
        })
        const token = jwt.sign({
            email: result.email,
            id: result._id,
        },
            secretKey,
            {
                expiresIn: "1h",
            }
        )

        res.status(201).json({ result, token })
    } catch (error) {
        res.status(500).json({ message: "Something Went Wrong" })
        console.log(error)
    }
}


// register= kayıt ol
module.exports = {
    register,
    login,
}