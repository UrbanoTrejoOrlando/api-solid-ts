import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const SecretKey = process.env.SECRET_KEY;

export const generateToken = (id:string) =>{
    return jwt.sign({id},SecretKey || "");

}

export const verifyToken = (token:string)=>{
    return jwt.verify(token,SecretKey || "");
} 
