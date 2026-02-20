import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./db/db.js";
import { authRouter } from "./router/auth.router.js";
import cookieparser from "cookie-parser"
import dns from 'node:dns';
import helmet from "helmet";
import { userRouter } from "./router/user.router.js";
import { authFactory } from "./factory/auth.factory.js";
import { tradeRouter } from "./router/trade.router.js";

dns.setServers(['8.8.8.8', '1.1.1.1']); // Forces Node to use Google and Cloudflare DNS

const app = express();
app.use(express.json());
app.use(cookieparser());
app.use(helmet());

dotenv.config()

connectDB();
const authenticate = authFactory.createAuthenticate();

app.get("/", (req, res) => {
    res.send("Hello");
})

app.use("/auth", authRouter);

app.use(authenticate.authenticate);

app.use("/user", userRouter);
app.use("/trade", tradeRouter);

app.listen(process.env.PORT, () => {
    console.log("App running on port 3000");
})