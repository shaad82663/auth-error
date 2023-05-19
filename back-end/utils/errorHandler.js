//ErrorHandler class for implementing error handling. It is inherited from Error class.
class ErrorHandler extends Error {
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
        
        Error.captureStackTrace(this, this.constructor);//Create .stack property on 'this' object
    }
}
module.exports = ErrorHandler;