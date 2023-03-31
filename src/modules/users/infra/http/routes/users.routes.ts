// products.routes.ts
import { Router } from "express";
import ProductsController from "../controllers/UsersController";

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.post("/", productsController.create);

export default productsRouter;