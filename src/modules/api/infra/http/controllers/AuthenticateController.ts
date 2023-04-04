import { Request, Response } from "express";
import { container } from "tsyringe";
import httpExceptionMiddleware from "../middlewares/errorHandlerMiddleware";
import AuthenticateUserService from "../../../services/auth/AuthenticateUserService";
import { authenticateSchema } from "../schemas/auth/authenticateSchema";

export default class AuthenticateController {
    public async login(request: Request, response: Response, next): Promise<Response> {
        try {
            const { email, password } = await authenticateSchema.validateAsync(request.body);

            const authenticateUserService = container.resolve(AuthenticateUserService);

            const { user, token } = await authenticateUserService.execute({ email, password });

            return response.json({ user, token });
        } catch (error) {
            return httpExceptionMiddleware(error, request, response, next);
        }
    }
}
