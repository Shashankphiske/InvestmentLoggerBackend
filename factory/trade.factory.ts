import { tradeControllerClass } from "../controller/trade.controller.js";
import { tradeMongoRepositoryClass } from "../repository/trade/trade.mongorepository.js";
import { tradeServicesClass } from "../services/trade.services.js";

class tradeFactory {
    static create () {
        const repo = new tradeMongoRepositoryClass();
        const service = new tradeServicesClass(repo);
        const controller = new tradeControllerClass(service);

        return controller;
    }
}

export { tradeFactory };