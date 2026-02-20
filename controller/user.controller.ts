import type { Request, Response } from "express";
import type { userServicesClass } from "../services/user.services.js";

class userControllerClass {
    constructor ( private userServices : userServicesClass ) {}

    create = async (req : Request, res : Response) => {
        const user = await this.userServices.create(req.body);
        return res.send(user);
    }

    getByEmail = async (req : Request, res : Response) => {
        const user = await this.userServices.get(req.body.email);
        return res.send(user);
    }
}

export { userControllerClass }