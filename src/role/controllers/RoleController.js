import { validationResult } from "express-validator";
import { sendErrorResponse } from "../../utils/handleResponse.js";
import RoleService from "../services/RoleService.js";

class RoleController {

    static create(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const errArr = errors.array();
                errArr.map((item) => (item.msg = item.msg));
                return sendErrorResponse(res, "Role not created!", errArr);
            }
            new RoleService(req, res).create();
        } catch (err) {
            console.log(err);
        }
    }

    static list(req, res) {
        try {
            new RoleService(req, res).list();
        } catch (err) {
            console.log(err);
        }
    }
}

export default RoleController;
