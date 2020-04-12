"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const checkConnection = () => {
    return (req, res, next) => {
        mongoose_1.default.connect(process.env.DATABASE_URL || process.env.MONGO_CLIENT_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        mongoose_1.default.set('useFindAndModify', false);
        mongoose_1.default.Promise = global.Promise;
        mongoose_1.default.connection.on('error', error => {
            console.log(error.message);
        });
        next();
    };
};
exports.default = checkConnection;
//# sourceMappingURL=database.js.map