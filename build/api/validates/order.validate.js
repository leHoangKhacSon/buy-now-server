"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const validateOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { restaurantId, items } = req.body;
        const errors = [];
        if (lodash_1.default.isEmpty(lodash_1.default.trim(restaurantId)) || !restaurantId) {
            errors.push('restaurantId id not empty');
        }
        if (lodash_1.default.isEmpty(items) || !items) {
            errors.push('items id not empty');
        }
        if (!!errors.length) {
            res.status(400).json(errors);
            return;
        }
        next();
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.default = validateOrder;
//# sourceMappingURL=order.validate.js.map