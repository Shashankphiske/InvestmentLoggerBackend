import type { NextFunction, Request, Response } from "express";
import type { userMongoRepositoryClass } from "../repository/user/user.mongorepository.js";
import { authUtil } from "../utils/auth.utils.js";

class authenticateClass {
    constructor ( private userMethods : userMongoRepositoryClass ) {}

    authenticate = async (req : Request, res : Response, next : NextFunction) => {
        const { email } = authUtil.decodeToken(req.cookies.token);
        const user = await this.userMethods.getByEmail(email);
        if(user.email){
            next();
        }

        return res.status(400).json({
            success : false,
            message : "Please login"
        });
    }
}

export { authenticateClass }