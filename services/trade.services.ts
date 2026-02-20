import type { baseTrade } from "../model/trade.model.js";
import type { tradeMongoRepositoryClass } from "../repository/trade/trade.mongorepository.js";

class tradeServicesClass {
    constructor ( private tradeMethods : tradeMongoRepositoryClass ) {}

    create = async (data : baseTrade) => {

    }

    getAll = async () => {

    }

    get = async ( id : string ) => {

    }

    delete = async ( id : string ) => {

    }
}

export { tradeServicesClass }