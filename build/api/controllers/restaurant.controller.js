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
const restaurants_model_1 = __importDefault(require("../models/restaurants.model"));
exports.getAllRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { category } = req.query;
        if (category) {
            const restaurants = yield restaurants_model_1.default.find();
            const result = lodash_1.default.filter(restaurants, ({ categories }) => lodash_1.default.indexOf(categories, category) !== -1);
            if (result.length) {
                res.status(200).json(result);
                return;
            }
            res.status(404).send('Not found');
            return;
        }
        const restaurants = yield restaurants_model_1.default.find();
        res.status(200).json(restaurants);
        return;
    }
    catch (error) {
        res.status(404).send(error.message);
        return;
    }
});
exports.getRestaurantById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const restaurant = yield restaurants_model_1.default.findOne({ id });
        if (restaurant) {
            res.status(200).json(restaurant);
            return;
        }
        res.status(404).send('Not found');
        return;
    }
    catch (error) {
        res.status(400).send(error.message);
        return;
    }
});
exports.createRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user: { userId }, } = req;
        if (userId) {
            const { name, address, image, description, status, openTime, categories } = req.body;
            const newRestaurant = new restaurants_model_1.default({
                name,
                address,
                image,
                description,
                status,
                openTime,
                categories,
                userId,
            });
            const saveRestaurant = yield newRestaurant.save();
            if (saveRestaurant) {
                res.status(201).send(saveRestaurant);
                return;
            }
            res.status(400).send('Saved fail');
            return;
        }
        res.status(404).send('Not found');
        return;
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.removeRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const restaurant = yield restaurants_model_1.default.find({ id });
        if (restaurant) {
            restaurants_model_1.default.deleteOne({ id });
            return;
        }
        res.status(404).send('Not found');
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
//# sourceMappingURL=restaurant.controller.js.map