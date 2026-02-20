import express from "express"
import { tradeFactory } from "../factory/trade.factory.js";
import { validate } from "../middleware/validate.js";
import { tradeCreateSchema, tradeDeleteSchema } from "../schema/trade.schema.js";

const tradeRouter = express.Router();
const tradeController = tradeFactory.create();

tradeRouter.post("/create", validate(tradeCreateSchema), tradeController.create);
tradeRouter.post("/delete", validate(tradeDeleteSchema), tradeController.delete);
tradeRouter.get("/fetch", tradeController.getAll);
tradeRouter.post("/fetch", validate(tradeDeleteSchema), tradeController.get);

export { tradeRouter }