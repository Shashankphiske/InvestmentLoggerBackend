import mongoose from "mongoose"

interface baseTrade {
    name : string,
    buyVal : number,
    date : Date,
    buyTime : string,
    sellVal : number,
    sellTime : string,
    quantity : number,
    unrealisedgains? : number,
    realisedgains? : number,
    charges? : number
}

interface mongoTrade extends baseTrade, mongoose.Document{}

const tradeModel = new mongoose.Schema<mongoTrade>({
    name : { type : String, required : true },
    date : { type : Date, required : true },
    buyVal : { type : Number, required : true },
    buyTime : { type : String, required : true },
    sellVal : { type : Number, required : true },
    sellTime : { type : String, required : true },
    quantity : { type : Number, required : true },
    unrealisedgains : { type : Number, required : true },
    charges : { type : Number, required : true },
    realisedgains : { type : Number, required : true }
})

const Trade = mongoose.model("Trade", tradeModel);

export { Trade };
export type { baseTrade }