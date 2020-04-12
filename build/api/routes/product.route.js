"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controllers/product.controller");
const checkToken_1 = __importDefault(require("../middlewares/checkToken"));
const protectedRoute_1 = __importDefault(require("../middlewares/protectedRoute"));
const product_validate_1 = __importDefault(require("../validates/product.validate"));
const router = express_1.default.Router();
router.get('/', checkToken_1.default, protectedRoute_1.default, product_controller_1.getAllProducts);
router.get('/:id', checkToken_1.default, protectedRoute_1.default, product_controller_1.getProduct);
router.post('/', checkToken_1.default, protectedRoute_1.default, product_validate_1.default, product_controller_1.createProduct);
router.delete('/', checkToken_1.default, protectedRoute_1.default, product_controller_1.removeProduct);
exports.default = router;
//# sourceMappingURL=product.route.js.map