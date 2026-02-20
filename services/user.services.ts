import type { baseUser } from "../model/user.model.js";
import type { userMongoRepositoryClass } from "../repository/user/user.mongorepository.js";

class userServicesClass {
    constructor ( private userMethods : userMongoRepositoryClass ) {};

    create = async ( data : baseUser ) => {

    }

    get = async ( email : string ) => {

    }
}

export { userServicesClass }