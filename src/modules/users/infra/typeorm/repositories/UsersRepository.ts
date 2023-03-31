// UsersRepository.ts
import { getRepository, Repository } from "typeorm";
import User from "../entities/User";
import { ICreateUserDTO } from "../../../repositories/IUsersRepository";

interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<User>;
}

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
}

export default UsersRepository;