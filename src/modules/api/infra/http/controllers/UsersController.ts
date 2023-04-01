import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserService } from "../../../services/CreateUsersService";
import { GetAllUsersService } from "../../../services/GetAllUsersService";

export default class UsersController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        const createUserService = container.resolve(CreateUserService);

        console.log('create', createUserService)
        const user = await createUserService.execute({
            name,
            email,
            password
        });

        console.log('create controller', user)


        return response.json(user);
    }

    public async getAllUsers(request: Request, response: Response): Promise<Response> {
        const listUsersService = container.resolve(GetAllUsersService);

        console.log('1', listUsersService)
        const users = await listUsersService.execute();

        console.log('Controller', users)

        return response.json(users);
    }
}
