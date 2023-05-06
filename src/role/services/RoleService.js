import Role from "../../db/models/Role.js";
import { sendErrorResponse, sendResponse, sendServerError } from "../../utils/handleResponse.js";

class RoleService {

    constructor(req, res) {
        this.request = req;
        this.response = res;
    }

    async create() {
        try {
            const { roleName } = this.request.body;
            const currentDate = new Date();

            const isRoleExist = await Role.findOne({ name: roleName });

            if (isRoleExist) {
                return sendErrorResponse(this.response, 'Role already exist!');
            }

            const roleToSave = new Role({
                name: roleName,
                created_at: currentDate,
            });

            await  roleToSave.save();

            return sendResponse(this.response, 'Role created!');
        }
        catch (err) {
            console.log(err);
            return sendServerError(this.response, 'Internal Server Error');
        }
    }
}

export default RoleService;
