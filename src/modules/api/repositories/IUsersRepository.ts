// src/modules/users/repositories/IUsersRepository.ts
import { ICreateUserDTO } from '../dtos/ICreateDTO';
import User from '../infra/typeorm/entities/User';

export default interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<User>;
    getAllUsers(): Promise<User[]>;
}

