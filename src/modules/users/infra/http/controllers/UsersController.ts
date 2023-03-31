// ProductsController.ts
import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserService } from "../../../services/CreateUsersService";
import { ListUsersService } from "../../../services/GetAllUsersService";

export default class UsersController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        const createProduct = container.resolve(CreateUserService);

        const product = await createProduct.execute({
            name,
            email,
            password
        });

        return response.json(product);
    }

    public async getAllUsers(request: Request, response: Response): Promise<Response> {
        const listUsers = container.resolve(ListUsersService);

        const users = await listUsers.execute();

        return response.json(users);
    }
}
