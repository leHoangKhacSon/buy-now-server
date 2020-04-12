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
const order_modal_1 = __importDefault(require("../models/order.modal"));
const user_model_1 = __importDefault(require("../models/user.model"));
const restaurants_model_1 = __importDefault(require("../models/restaurants.model"));
exports.getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { restaurantId } = req.params;
        console.log(req);
        if (restaurantId) {
            const orders = yield order_modal_1.default.find({ restaurantId });
            if (orders) {
                res.status(200).json(orders);
            }
            res.status(404).json([]);
        }
        res.status(404).send('Not found');
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.clientSendOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user: { userId }, } = req;
        const { restaurantId, address, phonenumber, items } = req.body;
        const user = yield user_model_1.default.findOne({ _id: userId });
        const restaurant = yield restaurants_model_1.default.findOne({ _id: restaurantId });
        let orderAddress = address;
        let orderPhonenumber = phonenumber;
        if (!user) {
            res.status(400).send('not exists user');
            return;
        }
        if (!restaurant) {
            res.status(400).send('not exists restaurant');
            return;
        }
        if (!address) {
            orderAddress = user.address;
        }
        if (!phonenumber) {
            orderPhonenumber = user.phonenumber;
        }
        const newOrder = new order_modal_1.default({
            userId,
            restaurantId,
            address: orderAddress,
            phonenumber: orderPhonenumber,
            items,
        });
        const saveOrder = yield newOrder.save();
        if (saveOrder) {
            res.status(201).json(saveOrder);
        }
        res.status(400).send('send order failed');
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.removeOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const order = yield order_modal_1.default.findOne({ _id: id });
        if (order) {
            yield order_modal_1.default.deleteOne({ _id: id });
            res.status(200).send('Delete succeed');
            return;
        }
        res.status(404).send('Not found');
        return;
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
//# sourceMappingURL=order.controller.js.map