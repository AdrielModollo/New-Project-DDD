import User from "../../../src/modules/api/infra/typeorm/entities/User";
import IUsersRepository from "../../../src/modules/api/repositories/IUsersRepository";
import { ICreateUserDTO } from "../../../src/modules/api/dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "../../../src/modules/api/dtos/IUpdateUserDTO";

class MockUsersRepository implements IUsersRepository {
    private users: User[] = [];

    async create({ name, email, password }: ICreateUserDTO): Promise<User> {
        const user = new User();

        Object.assign(user, {
            id: '123',
            name,
            email,
            password,
        });

        this.users.push(user);

        return user;
    }

    async findByEmail(email: string): Promise<User | undefined> {
        const user = this.users.find((user) => user.email === email);
        return user;
    }

    async findById(id: string): Promise<User | undefined> {
        const user = this.users.find((user) => user.id === id);
        return user;
    }

    async getAllUsers(): Promise<User[]> {
        return [
            {
                id: '1',
                name: 'John Doe',
                email: 'johndoe@example.com',
                password: 'password',
                created_at: new Date(),
                updated_at: new Date(),
                deleted_at: null
            },
            {
                id: '2',
                name: 'Jane Smith',
                email: 'janesmith@example.com',
                password: 'password',
                created_at: new Date(),
                updated_at: new Date(),
                deleted_at: null
            },
        ];
    }


    async updateUsers(id: string, data: Partial<IUpdateUserDTO>): Promise<User> {
        // TODO: Implement
        throw new Error("Method not implemented.");
    }

    async softDeleteByEmail(email: string): Promise<User> {
        // TODO: Implement
        throw new Error("Method not implemented.");
    }
}

export default MockUsersRepository;