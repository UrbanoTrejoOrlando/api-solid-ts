import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const SecretKey = process.env.SECRET_KEY;

export const generateToken = (id:String) =>{
    return jwt.sign({id},SecretKey);

}

export const verifyToken = (token:String)=>{
    return jwt.verify(token,SecretKey);
} 
