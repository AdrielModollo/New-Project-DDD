import { inject, injectable } from "tsyringe";
import User from "../infra/typeorm/entities/User";
import IUsersRepository from "../repositories/IUsersRepository";

type IRequest = {
    name: string;
    email: string;
    password: string;
}

@injectable()
export class CreateUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) { }

    async execute({ name, email, password }: IRequest): Promise<User> {
        const users = await this.usersRepository.create({
            name,
            email,
            password
        });

        console.log('Service', users)

        return users;
    }
}