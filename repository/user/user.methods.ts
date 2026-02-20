import type { baseUser } from "../../model/user.model.js";

abstract class userMethodsClass {
    abstract create ( data: baseUser) : Promise <baseUser>;
    abstract getByEmail ( email : string ) : Promise <baseUser>;
}

export { userMethodsClass }