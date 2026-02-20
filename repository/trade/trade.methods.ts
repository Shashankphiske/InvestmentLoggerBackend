import type { baseTrade } from "../../model/trade.model.js";

abstract class tradeMethodsClass {
    abstract create ( data : baseTrade ) : Promise<baseTrade>;
    abstract delete ( id : string) : Promise<baseTrade>;
    abstract getAll () : Promise<baseTrade[]>;
    abstract get( id : string ) : Promise<baseTrade>;
}

export { tradeMethodsClass }