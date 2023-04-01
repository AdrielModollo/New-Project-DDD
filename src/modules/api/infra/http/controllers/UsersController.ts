import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserService } from "../../../services/CreateUsersService";
import { GetAllUsersService } from "../../../services/GetAllUsersService";

export default class UsersController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        const createUserService = container.resolve(CreateUserService);

        const user = await createUserService.execute({
            name,
            email,
            password
        });

        return response.json(user);
    }

    public async getAllUsers(request: Request, response: Response): Promise<Response> {
        const listUsersService = container.resolve(GetAllUsersService);

        const users = await listUsersService.execute();

        return response.json(users);
    }
}
