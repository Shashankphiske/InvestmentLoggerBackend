import express from "express";
import dotenv from "dotenv"
import { connectDB } from "../../db/db.js";
import { authRouter } from "../../router/auth.router.js";
import cookieparser from "cookie-parser"
import dns from 'node:dns';
import helmet from "helmet";
import { userRouter } from "../../router/user.router.js";
import { authFactory } from "../../factory/auth.factory.js";
import { tradeRouter } from "../../router/trade.router.js";
import { errorHandler, globalErrorHandler } from "../../utils/error.utils.js";
import ServerlessHttp from "serverless-http";
import cors from "cors";

dns.setServers(['8.8.8.8', '1.1.1.1']); // Forces Node to use Google and Cloudflare DNS

const app = express();
app.use(express.json());
app.use(cookieparser());
app.use(helmet());

const corsOptions = {
  // Allows any origin while still supporting credentials/cookies
  origin: (origin : any, callback: any) => {
    callback(null, true);
  },
  methods: 'GET,POST,PUT,PATCH,DELETE',
  credentials: true,
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};


app.use(cors(corsOptions));

dotenv.config()

connectDB();
const authenticate = authFactory.createAuthenticate();

app.get("/.netlify/functions/server", (req, res) => {
    res.send("Hello");
})

app.use("/.netlify/functions/server/auth", authRouter);

app.use(errorHandler.controllerWrapper(authenticate.authenticate));

app.use("/.netlify/functions/server/user", userRouter);
app.use("/.netlify/functions/server/trade", tradeRouter);

app.use(globalErrorHandler.handleError)

export const handler = ServerlessHttp(app);
