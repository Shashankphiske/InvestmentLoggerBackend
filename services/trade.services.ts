import type { baseTrade } from "../model/trade.model.js";
import type { tradeMongoRepositoryClass } from "../repository/trade/trade.mongorepository.js";

class tradeServicesClass {
    constructor ( private tradeMethods : tradeMongoRepositoryClass ) {}

    create = async (data : baseTrade) => {

        const volume = (data.sellval * data.quantity) + (data.buyval * data.quantity);

        const unrealisedgains = (data.sellval * data.quantity) - (data.buyval * data.quantity);
        const stt = 0.15 * (volume / 100);
        const etc = 0.035 * (volume / 100);
        const gst = 18 * (volume / 100);
        const stf = 0.0001 * (volume / 100);
        const stampDuty = 0.002 * (volume / 100);
        const brokerage = 20;

        const charges = unrealisedgains + stt + etc + gst + stf + stampDuty + brokerage;

        const trade = await this.tradeMethods.create({
            ...data,
            charges : charges,
            unrealisedgains : unrealisedgains,
            realisedgains : unrealisedgains - charges 
        })

        return trade;
    }

    getAll = async () => {
        const trades = await this.tradeMethods.getAll();
        return trades;
    }

    get = async ( id : string ) => {
        const trade = await this.tradeMethods.get(id);
        return trade;
    }

    delete = async ( id : string ) => {
        const trade = await this.tradeMethods.delete(id);
        return trade;
    }
}

export { tradeServicesClass }