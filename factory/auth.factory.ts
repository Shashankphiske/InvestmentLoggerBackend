import { authControllerClass } from "../controller/auth.controller.js";
import { authenticateClass } from "../middleware/authenticate.js";
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

    static createAuthenticate () {
        const repo = new userMongoRepositoryClass();
        const authenticate = new authenticateClass(repo);

        return authenticate;
    }
}

export { authFactory }