import { RegisterDTO } from "../dtos/UserDTO";
import { UserRepository } from "../repositories/UserRepository";

export class AuthServices{
    constructor(private userRepository: UserRepository){}

    // Creacion de funciones
    async register(data: RegisterDTO){
        const exist = await this.userRepository.findByEmail(data.email);
    }
}
