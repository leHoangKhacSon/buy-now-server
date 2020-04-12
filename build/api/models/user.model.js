"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: false,
    },
    phone: {
        type: Number,
        required: false,
    },
    avatar: {
        type: String,
        required: false,
    },
});
const User = mongoose_1.default.model('User', userSchema, 'users');
exports.default = User;
//# sourceMappingURL=user.model.js.map