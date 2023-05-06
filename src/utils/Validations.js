import { body } from "express-validator"

class Validations {

    static createRoleValidation() {
        return [
            body("roleName", "Role name cannot be empty").notEmpty()
        ];
    }
}

export default Validations;