import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsCrontoller } from "./controllers/SettingsCrontoller";
import { UsersController } from "./controllers/UsersController";

const routes= Router();

const settingsCrontoller = new SettingsCrontoller()
const usersController = new UsersController()
const messagesController = new MessagesController()

routes.post("/settings",settingsCrontoller.create);
routes.post("/users",usersController.create);

routes.post("/messages",messagesController.create)
routes.get("/messages/:id",messagesController.showByUser)

export { routes };