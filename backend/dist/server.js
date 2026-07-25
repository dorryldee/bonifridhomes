"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./db");
const inquiries_1 = __importDefault(require("./routes/inquiries"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
// Enable CORS for frontend client integrations
app.use((0, cors_1.default)());
// Parse incoming request JSON payloads
app.use(express_1.default.json());
// Initialize SQLite database
(0, db_1.initDb)()
    .then(() => {
    console.log('SQLite database initialized successfully.');
})
    .catch((err) => {
    console.error('Failed to initialize SQLite database:', err);
});
// Mount modular REST API routes
app.use('/api/inquiries', inquiries_1.default);
// Basic health check route
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Bonifrid Homes Contact Backend is running smoothly.' });
});
// Start Express Listener
app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});
