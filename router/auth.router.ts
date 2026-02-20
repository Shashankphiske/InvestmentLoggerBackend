import express from "express"
import { authFactory } from "../factory/auth.factory.js";
import { validate } from "../middleware/validate.js";
import { createUserSchema } from "../schema/user.schema.js";

const authRouter = express.Router();

const authController = authFactory.create();
authRouter.post("/login", validate(createUserSchema), authController.login);

export { authRouter }