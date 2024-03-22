import express, { Request, Response } from "express";
import * as ItemsController from "../controllers/itemsController";

export const itemsRouter = express.Router();

itemsRouter.get("/", ItemsController.getItems);
itemsRouter.get("/:id", ItemsController.getItem);
itemsRouter.post("/", ItemsController.createItem);
itemsRouter.put("/:id", ItemsController.updateItem);
itemsRouter.delete("/:id", ItemsController.deleteItem);
