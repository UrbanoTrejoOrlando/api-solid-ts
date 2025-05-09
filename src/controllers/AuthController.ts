import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";
import { AuthService } from "../services/AuthServices";

const authService = new AuthService(new UserRepository());

export class AuthController{
    static async register(req:Request,res:Response){
        try{
            const token = await authService.register(req.body);
        }catch(error){

        }


    }
}
