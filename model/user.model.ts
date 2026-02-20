import mongoose from "mongoose";

interface baseUser {
    email : string,
    password : string
}

interface mongoUser extends baseUser, mongoose.Document{};

const userModel = new mongoose.Schema<mongoUser>({
    email : { type : String, required : true, unique : true },
    password : { type : String, required : true }
});

const User = mongoose.model("User", userModel);

export { User }
export type { baseUser }