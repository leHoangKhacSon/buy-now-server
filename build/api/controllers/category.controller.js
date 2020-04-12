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
const category_model_1 = __importDefault(require("../models/category.model"));
exports.getAllCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield category_model_1.default.find();
        if (categories) {
            res.status(200).json(categories);
            return;
        }
        res.status(404).send('Not found');
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, image } = req.body;
        const newCategory = new category_model_1.default({ name, image });
        const result = yield newCategory.save();
        if (result) {
            res.status(201).json(result);
            return;
        }
        res.status(400).send('Created fail');
        return;
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.removeCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const category = yield category_model_1.default.findOne({ _id: id });
        if (category) {
            yield category_model_1.default.deleteOne({ _id: id });
            res.status(200).send('Deleted');
        }
        res.status(404).send('Not found');
        return;
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
//# sourceMappingURL=category.controller.js.map