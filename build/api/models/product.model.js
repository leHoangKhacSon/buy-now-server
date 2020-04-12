"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    restaurantId: {
        type: String,
        required: true,
    },
    categories: {
        type: Array,
        required: true,
    }
});
const Product = mongoose_1.default.model('Product', productSchema, 'products');
exports.default = Product;
//# sourceMappingURL=product.model.js.map