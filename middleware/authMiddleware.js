const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");

const secretKey = "Egemen"

const auth = async (req, res, next) => {

    const token = await req.headers.authorization.split(" ")[1];
    let decodedData;

    try {
        const isCostumedAuth = token.lenght < 500

        if (token && isCostumedAuth) {

            decodedData = jwt.verify(token, secretKey)
            req.userID = decodedData?.id

        }
    }
    catch (error) {

        res.status(401).json({
            message: error
        });

    }
    next()
};


module.exports = auth