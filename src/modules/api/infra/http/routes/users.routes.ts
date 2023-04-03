import { Router } from "express";
import UsersController from "../controllers/UsersController";

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post("/", usersController.create);
usersRouter.get("/", usersController.getAllUsers);
usersRouter.get("/email/:email", usersController.findByEmailUsers);

export default usersRouter;