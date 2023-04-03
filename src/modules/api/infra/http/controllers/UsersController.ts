import { Request, Response } from "express";
import { container } from "tsyringe";
import httpExceptionMiddleware from "../middlewares/errorHandlerMiddleware";
import { CreateUserService } from "../../../services/CreateUsersService";
import { GetAllUsersService } from "../../../services/GetAllUsersService";
import { FindByEmailUsersService } from "../../../services/FindByEmailUsersService";

export default class UsersController {
    public async create(request: Request, response: Response, next): Promise<Response> {
        try {
            const { name, email, password } = request.body;

            const createUserService = container.resolve(CreateUserService);

            const user = await createUserService.execute({
                name,
                email,
                password,
            });

            return response.status(201).json(user);
        } catch (error) {
            return httpExceptionMiddleware(error, request, response, next);
        }
    }

    public async getAllUsers(request: Request, response: Response): Promise<Response> {
        const listUsersService = container.resolve(GetAllUsersService);

        const users = await listUsersService.execute();

        return response.json(users);
    }

    public async findByEmailUsers(request: Request, response: Response, next): Promise<Response> {
        try {
            const { email } = request.params;

            const findByEmail = container.resolve(FindByEmailUsersService);

            const users = await findByEmail.execute(email);

            return response.json(users);
        } catch (error) {
            return httpExceptionMiddleware(error, request, response, next);
        }
    }
}
