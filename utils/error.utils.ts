import type { NextFunction, Request, Response } from "express";

class serverError extends Error {
    public status : number;
    constructor ( status : number, message : string ) {
        super(message);
        this.status = status;
        this.message = message;
        Object.setPrototypeOf(this, new.target.prototype);
        Error.captureStackTrace(this);
    }
}

class errorHandlerClass {
    controllerWrapper = (fn : any) => {
        return (req : Request, res : Response, next : NextFunction) => {
            Promise.resolve(fn(req, res, next)).catch(next);
        }
    }
}

class globalErrorHandlerClass {
    handleError = (err : any, req : Request, res : Response, next : NextFunction) => {
        console.log(`Internal server error : Status : ${err.status}, message : ${err.message}`);

        return res.status(err.status).json({
            message : err.message
        });
    }
}

const errorHandler = new errorHandlerClass();
const globalErrorHandler = new globalErrorHandlerClass();

export { globalErrorHandler, errorHandler, serverError }