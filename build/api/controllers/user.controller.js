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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = __importDefault(require("../models/user.model"));
exports.index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_model_1.default.find();
    res.json(users);
});
exports.register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, phone, avatar } = req.body;
    const findUser = yield user_model_1.default.findOne({ email });
    // check user in database
    if (findUser) {
        res.status(401).send('Email existed');
        return;
    }
    // hash password
    const salt = yield bcrypt_1.default.genSalt(10);
    const hashPassword = yield bcrypt_1.default.hash(password, salt);
    const newUser = new user_model_1.default({
        email,
        password: hashPassword,
        phone,
        avatar,
    });
    try {
        const saveNewUser = yield newUser.save();
        const token = jsonwebtoken_1.default.sign({ userId: saveNewUser.id }, process.env.SECRET_KEY);
        res.status(201).send({
            userId: saveNewUser.id,
            token,
        });
    }
    catch (error) {
        res.status(401).send(error.message);
    }
});
exports.login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield user_model_1.default.findOne({ email });
        if (user) {
            const checkPassword = yield bcrypt_1.default.compare(password, user.password);
            if (checkPassword) {
                const token = jsonwebtoken_1.default.sign({ userId: user._id }, process.env.SECRET_KEY);
                res.status(200).json({
                    userId: user._id,
                    token,
                });
                return;
            }
            res.status(400).send('Password wrong');
            return;
        }
        res.status(404).send('Not found account');
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
//# sourceMappingURL=user.controller.js.map