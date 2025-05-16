import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt";
// Implementar un middleware para aunteticar 
export const authMiddleware =(req:Request,res:Response, next:NextFunction)=>{
    const token = req.headers.authorization?.split(" ")[1];
/**
 * headers:{
 *  "Content-Type": "application/json",
 *  "Authorization": "Bearer 123456"
 * }
 */

}