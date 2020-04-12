"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const restaurant_controller_1 = require("../controllers/restaurant.controller");
const checkToken_1 = __importDefault(require("../middlewares/checkToken"));
const protectedRoute_1 = __importDefault(require("../middlewares/protectedRoute"));
const restaurant_validate_1 = __importDefault(require("../validates/restaurant.validate"));
const router = express_1.default.Router();
router.get('/', restaurant_controller_1.getAllRestaurant);
router.get('/:id', restaurant_controller_1.getRestaurantById);
router.post('/', checkToken_1.default, protectedRoute_1.default, restaurant_validate_1.default, restaurant_controller_1.createRestaurant);
exports.default = router;
//# sourceMappingURL=restaurant.route.js.map