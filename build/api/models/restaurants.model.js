"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    status: {
        type: Boolean,
        required: false,
    },
    openTime: {
        type: String,
        required: true,
    },
    categories: {
        type: Array,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
});
const Restaurants = mongoose_1.default.model('Restaurants', restaurantSchema, 'restaurants');
exports.default = Restaurants;
//# sourceMappingURL=restaurants.model.js.map