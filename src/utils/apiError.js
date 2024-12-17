class apiError extends Error{
    constructor(message = "something went wrong",errors = [], statusCode, stack = ""){
        super(message)
        this.errors = errors
        this.statusCode = statusCode
        this.stack = stack
        this.data = null
        this.message = message
        this.success = false

        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}
export {apiError}