import mongoose from "mongoose"
import "dotenv/config"

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.CON ?? "");
        console.log("MongoDB Connected");
    }catch (err) {
        console.log(`Error while connecting to mongodb : ${err}`);
    }
}

export { connectDB }