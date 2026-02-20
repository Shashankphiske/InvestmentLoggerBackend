import { Trade, type baseTrade } from "../../model/trade.model.js";
import { tradeMethodsClass } from "./trade.methods.js";

class tradeMongoRepositoryClass extends tradeMethodsClass{
    async create(data: baseTrade): Promise<baseTrade> {
        const trade = new Trade(data);
        await trade.save();
        return trade;
    }

    async delete(id: string): Promise<baseTrade> {
        const trade = await Trade.findByIdAndDelete({ _id : id });
        return trade ?? <baseTrade>{};
    }

    async getAll(): Promise<baseTrade[]> {
        const trades = await Trade.find();
        return trades;
    }

    async get(id: string): Promise<baseTrade> {
        const trade = await Trade.findOne({ _id : id });
        return trade ?? <baseTrade>{};
    }
}

export { tradeMongoRepositoryClass }