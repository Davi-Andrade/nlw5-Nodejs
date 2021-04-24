import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User";
import { UsersRepository } from "../repositores/UsersRepository"



class UsersService{
    private usersRepository: Repository<User>;
    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository);
    }
    
    async create(email: string){
        const userExist = await this.usersRepository.findOne({
            email
        })

        if(userExist){
            return userExist;
        }

        const user = this.usersRepository.create({
            email
        })

        await this.usersRepository.save(user);
        return user;
    }

    async findByEmail(email:string){
        const userExist = await this.usersRepository.findOne({
            email
        })

        if(userExist){
            return userExist;
        }
    }
}

export { UsersService }