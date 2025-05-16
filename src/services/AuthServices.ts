import { LoginDTO, RegisterDTO } from "../dtos/UserDTO";
import { UserRepository } from "../repositories/UserRepository";
import { generateToken } from "../utils/jwt";
import bcrypt from "bcrypt";

export class AuthService {
    constructor(private userRepository: UserRepository) { }
    async register(data: RegisterDTO) {
        const exist = await this.userRepository.findByEmail(data.email);
        if (exist) throw new Error("User already exists");
        const user = await this.userRepository.create(data);
        return generateToken(user._id.toString());

    }
    async login(data: LoginDTO) {
        const user = await this.userRepository.findByEmail(data.email);
        if (!user) throw new Error("User not Found");
        const isMach = bcrypt.compare(user.password, data.password);
        if (!isMach) throw new Error("Invalid credentials");

        return generateToken(user._id.toString());

    }

    // Funcion para retornar todos los usuarios
    async getAllUsers(){
        // Regresar todos los usuarios
        return await this.userRepository.getAllUser();
    }


}