import { RegisterDTO } from "../dtos/UserDTO";
import { UserRepository } from "../repositories/UserRepository";
import { generateToken } from "../utils/jwt";

export class AuthServices{
    constructor(private userRepository: UserRepository){}

    // Creacion de funciones
    async register(data: RegisterDTO){
        const exist = await this.userRepository.findByEmail(data.email);
        if (exist) throw new Error("User already exists");
        const user = await this.userRepository.create(data);
        return generateToken(user._id.toString());

    }
}
