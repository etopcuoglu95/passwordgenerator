const jwt = require("jsonwebtoken");
require("dotenv").config();

// ceate token (called from api)
exports.createToken = function (req) {
    return _createToken(req);
}

// create token (called internally)
_createToken = function(req) {
    const { id } = req.body;
    const user = { id: id };
    // figure out why dotenv is not working/
    const accessToken = jwt.sign(user, "process.env.ACCESS_TOKEN_SECRET - Lol", { expiresIn: '30m' });
    return accessToken;
}

// check if token is expired/not created
exports.isExpired = function(req) {
    // get token
    // const token = req.header('token');
    const { token, id } = req.body;
    // if cant find token
    if (!token) return true;

    // verify token
    try {
        // verify token
        const valid = jwt.verify(token, "process.env.ACCESS_TOKEN_SECRET - Lol");
        if (valid.id !== req.body.id)
            return true;
        return false;
    }
    catch (e) {
        // can't verfy token
        return true;
    }
}

exports.refresh = function (req) {
    // get token
    // const token = req.header('token');
    const { token } = req.body;

    // decode token
    const valid = jwt.verify(token, "process.env.ACCESS_TOKEN_SECRET - Lol");

    // create object
    const person = {
        body: {
            id: valid.id
        }
    }

    return _createToken(person);
}