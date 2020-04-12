"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("../controllers/order.controller");
const checkToken_1 = __importDefault(require("../middlewares/checkToken"));
const protectedRoute_1 = __importDefault(require("../middlewares/protectedRoute"));
const order_validate_1 = __importDefault(require("../validates/order.validate"));
const router = express_1.default.Router();
router.get('/:restaurantId', checkToken_1.default, protectedRoute_1.default, order_controller_1.getOrder);
router.post('/', checkToken_1.default, protectedRoute_1.default, order_validate_1.default, order_controller_1.clientSendOrder);
router.delete('/:id', checkToken_1.default, protectedRoute_1.default, order_controller_1.removeOrder);
exports.default = router;
//# sourceMappingURL=order.route.js.map