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
const product_model_1 = __importDefault(require("../models/product.model"));
exports.getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { restaurantId } = req.query;
        if (!restaurantId) {
            res.status(400).send('Not have product');
        }
        const products = yield product_model_1.default.find({ restaurantId });
        if (products && !!products.length) {
            res.status(200).json(products);
            return;
        }
        res.status(401).send('Not found');
        return;
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const product = yield product_model_1.default.findOne({ _id: id });
        if (product) {
            res.status(200).json(product);
            return;
        }
        res.status(404).send('Not found');
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req;
        const { name, image, price, categories, restaurantId } = req.body;
        const newProduct = new product_model_1.default({
            name,
            image,
            price,
            restaurantId,
            categories,
        });
        const result = yield newProduct.save();
        if (result) {
            res.status(201).json(result);
            return;
        }
        res.status(400).send('Created fail');
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.removeProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const product = yield product_model_1.default.findOne({ _id: id });
        if (product) {
            yield product_model_1.default.deleteOne({ _id: id });
            res.status(200);
            return;
        }
        res.status(404).send('Not found');
        return;
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
//# sourceMappingURL=product.controller.js.map