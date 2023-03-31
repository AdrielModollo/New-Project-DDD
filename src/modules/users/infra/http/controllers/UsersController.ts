// ProductsController.ts
import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserService } from "../../../services/CreateUsersService";

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
}