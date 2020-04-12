"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const database_1 = __importDefault(require("./database"));
const user_route_1 = __importDefault(require("../api/routes/user.route"));
const restaurant_route_1 = __importDefault(require("../api/routes/restaurant.route"));
const product_route_1 = __importDefault(require("../api/routes/product.route"));
const category_route_1 = __importDefault(require("../api/routes/category.route"));
const order_route_1 = __importDefault(require("../api/routes/order.route"));
dotenv_1.default.config();
const app = express_1.default();
app.use(database_1.default());
app.use(helmet_1.default());
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static('public'));
app.get('/', (req, res) => {
    res.send('Hello world');
});
app.use('/users', user_route_1.default);
app.use('/restaurants', restaurant_route_1.default);
app.use('/products', product_route_1.default);
app.use('/categories', category_route_1.default);
app.use('/orders', order_route_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map