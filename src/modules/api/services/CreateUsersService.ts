import { inject, injectable } from "tsyringe";
import { hash } from 'bcryptjs';
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
        const checkUserExists = await this.usersRepository.findByEmail(email);

        if (checkUserExists) {
            throw new Error('Email address already used.');
        }

        const hashedPassword = await hash(password, 8);

        const user = await this.usersRepository.create({
            name,
            email,
            password: hashedPassword,
        });

        return user;
    }
}