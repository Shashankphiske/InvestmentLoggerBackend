import type { baseUser } from "../model/user.model.js";
import type { userMongoRepositoryClass } from "../repository/user/user.mongorepository.js";
import { authUtil } from "../utils/auth.utils.js";

class userServicesClass {
    constructor ( private userMethods : userMongoRepositoryClass ) {};

    create = async ( data : baseUser ) => {
        const hashedPass = await authUtil.generatePass(data.password);
        const user = await this.userMethods.create({
            ...data,
            password : hashedPass
        });
        return user;
    }

    get = async ( email : string ) => {
        const user = await this.userMethods.getByEmail(email);
    }
}

export { userServicesClass }