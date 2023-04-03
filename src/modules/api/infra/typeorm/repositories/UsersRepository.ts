import { getRepository, Repository } from "typeorm";
import User from "../entities/User";
import IUsersRepository from "../../../repositories/IUsersRepository";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "../../../dtos/IUpdateUserDTO";

class UsersRepository implements IUsersRepository {
    private ormRepository: Repository<User>;

    constructor() {
        this.ormRepository = getRepository(User);
    }

    public async create({ name, email, password }: ICreateUserDTO): Promise<User> {
        const user = this.ormRepository.create({
            name,
            email,
            password
        });

        await this.ormRepository.save(user);

        return user;
    }

    public async getAllUsers(): Promise<User[]> {
        const users = await this.ormRepository.find();
        return users;
    }

    public async findByEmail(email: string): Promise<User | undefined> {
        const user = await this.ormRepository.findOne({
            where: { email },
        });
        console.log(email)
        return user;
    }

    public async updateUsers(id: string, data: Partial<IUpdateUserDTO>): Promise<User | undefined> {
        const user = await this.ormRepository.findOne({
            where: { id },
        });

        Object.assign(user, data);

        const updatedUser = await this.ormRepository.save(user);

        return updatedUser;
    }


}


export default UsersRepository;
