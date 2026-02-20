import { type baseUser } from "../model/user.model.js";
import type { userMongoRepositoryClass } from "../repository/user/user.mongorepository.js";
import { authUtil } from "../utils/auth.utils.js";

class authServicesClass {
    constructor ( private userMethods : userMongoRepositoryClass ) {}

    login = async ( data : baseUser ) => {
        const user = await this.userMethods.getByEmail(data.email);
        if(user.email){
            const flag = await authUtil.verifyPass(data.password, user.password);
            if(flag) {
                const token = authUtil.generateToken(data.email);
                return token;
            }
        }

        return "Invalid Credentials";
    }

}

export { authServicesClass }