import { authControllerClass } from "../controller/auth.controller.js";
import { userMongoRepositoryClass } from "../repository/user/user.mongorepository.js"
import { authServicesClass } from "../services/auth.services.js";
import { authUtilClass } from "../utils/auth.utils.js";

class authFactory {
    static create () {
        const repo = new userMongoRepositoryClass();
        const service = new authServicesClass(repo)
        const controller = new authControllerClass(service);

        return controller;
    }

    static authUtil () {
        const util = new authUtilClass();
        
        return util;
    }
}

export { authFactory }