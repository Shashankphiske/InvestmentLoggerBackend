import { userControllerClass } from "../controller/user.controller.js";
import { userMongoRepositoryClass } from "../repository/user/user.mongorepository.js";
import { userServicesClass } from "../services/user.services.js";

class userFactory {
    static create () {
        const repo = new userMongoRepositoryClass();
        const service = new userServicesClass(repo);
        const controller = new userControllerClass(service);

        return controller;
    }
}

export { userFactory }