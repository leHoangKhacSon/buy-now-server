"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const port = process.env.SERVER_PORT;
const app = express_1.default();
app.use(helmet_1.default());
app.use(cors_1.default());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello world');
});
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map