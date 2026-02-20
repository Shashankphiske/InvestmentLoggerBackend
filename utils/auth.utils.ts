import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

class authUtilClass {
    generateToken = ( email : string ) => {
        return jwt.sign(email, process.env.SECRET as string);
    }

    decodeToken = ( token : string ) => {
        return jwt.verify(token, process.env.SECRET as string) as { email : string }
    }

    generatePass = async ( password : string ) => {
        return await bcrypt.hash(password, 10);
    }

    verifyPass = async ( password : string, hashpassword : string ) => {
        return await bcrypt.compare(password, hashpassword);
    }
}

const authUtil = new authUtilClass();

export { authUtilClass, authUtil }