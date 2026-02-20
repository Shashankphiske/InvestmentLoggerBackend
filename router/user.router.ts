import express from "express"
import { validate } from "../middleware/validate.js";
import { createUserSchema } from "../schema/user.schema.js";
import { userFactory } from "../factory/user.factory.js";
import { errorHandler } from "../utils/error.utils.js";

const userRouter = express.Router();
const userController = userFactory.create();

userRouter.post("/create", errorHandler.controllerWrapper(validate(createUserSchema)), errorHandler.controllerWrapper(userController.create));
userRouter.post("/get", errorHandler.controllerWrapper(validate(createUserSchema)), errorHandler.controllerWrapper(userController.getByEmail));

export { userRouter }