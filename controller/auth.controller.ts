import { authServicesClass } from "../services/auth.services.js";
import type { Request, Response } from "express";

class authControllerClass {
    constructor ( private authServices : authServicesClass ) {}

    login = async ( req : Request, res : Response ) => {
        const result = await this.authServices.login(req.body);
        return res.send(result);
    }
}

export { authControllerClass }