import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt";
// Implementar un middleware para aunteticar 
export const authMiddleware =(req:Request,res:Response, next:NextFunction)=>{
    const token = req.headers.authorization?.split(" ")[1];
    if(!token) return res.status(401).json({message: "Token no proporcionado"});
    try {
        const id = verifyToken(token);
        req.body.user = id;
        next();
    } catch (error:any) {
        res.status(401).json({message: error.message || "Token invalidado"})
    }

/**
 * headers:{
 *  "Content-Type": "application/json",
 *  "Authorization": "Bearer 123456"
 * }
 */



}