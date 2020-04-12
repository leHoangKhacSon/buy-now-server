"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("../controllers/category.controller");
const checkToken_1 = __importDefault(require("../middlewares/checkToken"));
const protectedRoute_1 = __importDefault(require("../middlewares/protectedRoute"));
const category_validate_1 = __importDefault(require("../validates/category.validate"));
const router = express_1.default.Router();
router.get('/', checkToken_1.default, protectedRoute_1.default, category_controller_1.getAllCategories);
router.post('/', checkToken_1.default, protectedRoute_1.default, category_validate_1.default, category_controller_1.createCategory);
router.delete('/', checkToken_1.default, protectedRoute_1.default, category_controller_1.removeCategory);
exports.default = router;
//# sourceMappingURL=category.route.js.map