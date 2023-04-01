import { inject, injectable } from "tsyringe";
import User from "../infra/typeorm/entities/User";
import IUsersRepository from "../repositories/IUsersRepository";

@injectable()
export class GetAllUsersService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) { }

    async execute(): Promise<User[]> {
        console.log("Getting all users from repository");
        const users = await this.usersRepository.getAllUsers();
        console.log("Returned users", users);
        return users;
    }
}
