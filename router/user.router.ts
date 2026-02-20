import express from "express"
import { validate } from "../middleware/validate.js";
import { createUserSchema } from "../schema/user.schema.js";
import { userFactory } from "../factory/user.factory.js";

const userRouter = express.Router();
const userController = userFactory.create();

userRouter.post("/create", validate(createUserSchema), userController.create);
userRouter.post("/get", validate(createUserSchema), userController.getByEmail);

export { userRouter }