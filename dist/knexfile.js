"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Update with your config settings.
const path = require("path");
exports.default = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: path.resolve(__dirname, 'crud.db3'),
        },
        useNullAsDefault: true,
    },
};
