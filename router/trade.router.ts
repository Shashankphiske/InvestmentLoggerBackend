import express from "express"
import { tradeFactory } from "../factory/trade.factory.js";
import { validate } from "../middleware/validate.js";
import { tradeCreateSchema, tradeDeleteSchema } from "../schema/trade.schema.js";
import { errorHandler } from "../utils/error.utils.js";

const tradeRouter = express.Router();
const tradeController = tradeFactory.create();

tradeRouter.post("/", errorHandler.controllerWrapper(validate(tradeCreateSchema)), errorHandler.controllerWrapper(tradeController.create));
tradeRouter.delete("/", errorHandler.controllerWrapper(validate(tradeDeleteSchema)), errorHandler.controllerWrapper(tradeController.delete));
tradeRouter.get("/", errorHandler.controllerWrapper(tradeController.getAll));
tradeRouter.get("/:id",  errorHandler.controllerWrapper(tradeController.get));

export { tradeRouter }