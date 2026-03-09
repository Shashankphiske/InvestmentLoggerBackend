import type { Request, Response } from "express";
import type { tradeServicesClass } from "../services/trade.services.js";

class tradeControllerClass {
    constructor ( private tradeServices : tradeServicesClass ) {}
    
    create  = async ( req : Request, res : Response ) => {
        console.log(req.body)
        const trade = await this.tradeServices.create(req.body);
        return res.json({
            success : true,
            message : "Trade logged successfuly",
            data : trade
        })
    }

    getAll = async (req : Request, res : Response) => {
        const trades = await this.tradeServices.getAll();
        return res.json({
            success : true,
            message : "Trades fetched successfuly",
            data : trades
        })
    }

    get = async (req : Request, res : Response) => {
        const trade = await this.tradeServices.get(req.params.id?.toString() ?? "");
        return res.json({
            success : true,
            message : "Trade fetched successfuly",
            data : trade
        })
    }

    delete = async (req : Request, res : Response) => {
        const trade = await this.tradeServices.delete(req.params.id?.toString() ?? "");
        return res.json({
            success : true,
            message : "Trade deleted successfuly",
            data : trade
        })
    }
}

export { tradeControllerClass };