import { Router } from "express";
import usersRouter from "../../modules/api/infra/http/routes/users.routes";
import { HttpException, HttpStatusCode } from "../exceptions/HttpException";

const routes = Router();

routes.use('/users', usersRouter);
routes.use((req, res, next) => {
    next(new HttpException(HttpStatusCode.NOT_FOUND, 'Route not found'));
});

export default routes;