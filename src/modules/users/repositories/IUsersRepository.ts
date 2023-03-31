// src/modules/users/repositories/IUsersRepository.ts
import User from '../infra/typeorm/entities/User';

export default interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<User>;
}

export interface ICreateUserDTO {
    name: string;
    email: string;
    password: string;
}
