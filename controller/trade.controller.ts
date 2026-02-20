import type { Request, Response } from "express";
import type { tradeServicesClass } from "../services/trade.services.js";

class tradeControllerClass {
    constructor ( private tradeServices : tradeServicesClass ) {}
    
    create  = async ( req : Request, res : Response ) => {
        const trade = await this.tradeServices.create(req.body);
        return trade;
    }

    getAll = async (req : Request, res : Response) => {
        const trades = await this.tradeServices.getAll();
        return trades;
    }

    get = async (req : Request, res : Response) => {
        const trade = await this.tradeServices.get(req.body.id);
        return trade;
    }

    delete = async (req : Request, res : Response) => {
        const trade = await this.tradeServices.delete(req.body.id);
        return trade;
    }
}

export { tradeControllerClass };