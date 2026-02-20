import { User, type baseUser } from "../../model/user.model.js";
import { userMethodsClass } from "./user.methods.js";

class userMongoRepositoryClass extends userMethodsClass {
    async create (data: baseUser): Promise<baseUser> {
        const user = new User(data);
        await user.save();
        return user;
    }

    async getByEmail(email: string): Promise<baseUser> {
        const user = await User.findOne({ email : email });
        return user ?? <baseUser>{};
    }
}

export { userMongoRepositoryClass }