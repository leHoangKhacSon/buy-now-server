"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const orderSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    restaurantId: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false,
    },
    phonenumber: {
        type: String,
        required: false,
    },
    items: {
        type: Array,
        required: true,
    },
});
/*
item : [
  {
    quantity: number,
    product: {}
  }
  ...
]
*/
const Order = mongoose_1.default.model('Order', orderSchema, 'orders');
exports.default = Order;
//# sourceMappingURL=order.modal.js.map