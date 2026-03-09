import type { baseTrade } from "../model/trade.model.js";
import type { tradeMongoRepositoryClass } from "../repository/trade/trade.mongorepository.js";

class tradeServicesClass {
    constructor ( private tradeMethods : tradeMongoRepositoryClass ) {}

create = async (data: baseTrade) => {
    const { buyVal, sellVal, quantity: qty } = data;

    const buyTurnover = buyVal * qty;
    const sellTurnover = sellVal * qty;
    const totalTurnover = buyTurnover + sellTurnover;

    // 1. Service Charges (Taxable at 18% GST)
    const brokerage = 40; // ₹20 Buy + ₹20 Sell
    const etc = 0.0003503 * totalTurnover; // Current NSE Options rate
    const sebiCharges = 0.000001 * totalTurnover; // ₹10 per Crore

    // 2. GST: 18% ONLY on Service Charges
    const gst = 0.18 * (brokerage + etc + sebiCharges);

    // 3. Statutory Taxes (Current March 2026 Rates - No GST)
    const stt = 0.001 * sellTurnover; // 0.1% (Pre-April 2026 rate)
    const stampDuty = 0.00003 * buyTurnover; // 0.003% on Buy side only

    // FINAL CALCULATION
    const totalCharges = brokerage + etc + sebiCharges + gst + stt + stampDuty;
    const grossPnL = sellTurnover - buyTurnover;
    const netPnL = grossPnL - totalCharges;

    return await this.tradeMethods.create({
        ...data,
        charges: Number(totalCharges.toFixed(2)),
        unrealisedgains: Number(grossPnL.toFixed(2)), // Gross Profit
        realisedgains: Number(netPnL.toFixed(2))     // Net Profit
    });
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