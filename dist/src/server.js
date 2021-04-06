"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectedKnex = void 0;
const dotenv = require("dotenv");
dotenv.config({ path: './config.env' });
const Knex = require("knex");
const app_1 = require("./app");
//connect db
exports.connectedKnex = Knex.knex({
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: './db/crud.db3',
    },
});
const port = process.env.PORT || 8000;
const server = app_1.default.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log('err', err);
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
