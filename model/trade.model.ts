import mongoose from "mongoose"

interface baseTrade {
    name : string,
    buyval : number,
    date : Date,
    buytime : number,
    sellval : number,
    selltime : number,
    quantity : number,
    unrealisedgains? : number,
    realisedgains? : number,
    charges? : number
}

interface mongoTrade extends baseTrade, mongoose.Document{}

const tradeModel = new mongoose.Schema<mongoTrade>({
    name : { type : String, required : true },
    date : { type : Date, required : true },
    buyval : { type : Number, required : true },
    buytime : { type : Number, required : true },
    sellval : { type : Number, required : true },
    selltime : { type : Number, required : true },
    quantity : { type : Number, required : true },
    unrealisedgains : { type : Number, required : true },
    charges : { type : Number, required : true },
    realisedgains : { type : Number, required : true }
})

const Trade = mongoose.model("Trade", tradeModel);

export { Trade };
export type { baseTrade }