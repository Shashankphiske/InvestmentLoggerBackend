import { authServicesClass } from "../services/auth.services.js";
import type { Request, Response } from "express";

class authControllerClass {
    constructor ( private authServices : authServicesClass ) {}

    login = async ( req : Request, res : Response ) => {
        const token = await this.authServices.login(req.body);
        res.cookie("token", token, { maxAge : 7 * 24 * 60 * 60 * 1000, sameSite : true, httpOnly : true });
        return res.send("Success");
    }
}

export { authControllerClass }