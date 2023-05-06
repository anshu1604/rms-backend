import express from "express";
import Validations from "../../utils/Validations.js";
import RoleController from "../controllers/RoleController.js";

const roleRouter = express.Router();

// create role route
roleRouter.post("/role/create", Validations.createRoleValidation(), RoleController.create);

// roles list route
roleRouter.get("/role/", RoleController.list);

export default roleRouter;
