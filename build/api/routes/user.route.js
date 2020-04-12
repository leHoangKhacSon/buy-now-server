"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const user_validate_1 = require("../validates/user.validate");
const checkToken_1 = __importDefault(require("../middlewares/checkToken"));
const protectedRoute_1 = __importDefault(require("../middlewares/protectedRoute"));
const router = express_1.default.Router();
router.get('/', checkToken_1.default, protectedRoute_1.default, user_controller_1.index);
router.post('/register', user_validate_1.checkInfo, user_controller_1.register);
router.post('/login', user_validate_1.checkInfo, user_controller_1.login);
exports.default = router;
//# sourceMappingURL=user.route.js.map