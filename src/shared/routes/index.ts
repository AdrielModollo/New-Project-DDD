import { Router } from "express";
import usersRouter from "../../modules/api/infra/http/routes/users.routes";
import authenticateRouter from "../../modules/api/infra/http/routes/auth.routes";
import { HttpException, HttpStatusCode } from "../exceptions/HttpException";
import authenticate from "../../modules/api/infra/http/middlewares/authenticateMiddleware";

const routes = Router();

routes.use('/users', authenticateRouter)
routes.use(authenticate);
routes.use('/users', usersRouter);
routes.use((req, res, next) => {
    next(new HttpException(HttpStatusCode.NOT_FOUND, 'Route not found'));
});

export default routes;