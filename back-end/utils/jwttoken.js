//Create and send and save token in the cookie.
const sendToken = (user, ststusCode, res) => {
    //Create jwt token 
    const token = user.getJwtToken();

    const options = {
        expires : new Date(
            Date.now() + process.env.COOKIE_EXPIRES_TIME*24*60*60*1000
        ),
        httpOnly : true
    }

    //Store the token in cookie.  {'token' : token} <=== {key : value}
    res.status(ststusCode).cookie('token', token, options).json({
        success : true,
        token,
        user 
    })
}

module.exports = sendToken;