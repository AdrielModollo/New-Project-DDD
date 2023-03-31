// UsersRepository.ts
import { getRepository, Repository } from "typeorm";
import User from "../entities/User";
import IUsersRepository from "../../../repositories/IUsersRepository";
import { ICreateUserDTO } from "../../../repositories/IUsersRepository";

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

    public async findAll(): Promise<User[]> {
        const users = await this.ormRepository.find();

        return users;
    }
}

export default UsersRepository;
