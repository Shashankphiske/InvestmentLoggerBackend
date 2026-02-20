import express from "express"
import { authFactory } from "../factory/auth.factory.js";
import { validate } from "../middleware/validate.js";
import { createUserSchema } from "../schema/user.schema.js";
import { errorHandler } from "../utils/error.utils.js";

const authRouter = express.Router();

const authController = authFactory.create();
authRouter.post("/login", errorHandler.controllerWrapper(validate(createUserSchema)), errorHandler.controllerWrapper(authController.login));

export { authRouter }