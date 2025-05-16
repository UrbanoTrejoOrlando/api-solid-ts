import { UserModel } from "../models/User";
import { UserInterface } from "../interfaces/UserInterface";

export class UserRepository {
    async create(user:UserInterface){
        return await new UserModel(user).save();
    }

    async findByEmail(email:String){
        return await UserModel.findOne({email});
    }

    // Funcion para regresar todos los ysyaruis
    async getAllUser(){
        //  Retorna todos los usuarios pero menos la contraseña
        return await UserModel.find().select("-password");
        
    }
}