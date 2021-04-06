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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleUser = exports.deleteUser = exports.getAllUsers = exports.createUser = void 0;
const server_1 = require("../../server");
const createUser = ({ userInput }) => __awaiter(void 0, void 0, void 0, function* () {
    let { Name, Email, Phone } = userInput;
    const user = yield server_1.connectedKnex('users').insert({ Name, Phone, Email });
    console.log('us', user);
    return 'User created successfully';
});
exports.createUser = createUser;
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield server_1.connectedKnex('users').select('*');
    return users;
});
exports.getAllUsers = getAllUsers;
const deleteUser = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield server_1.connectedKnex('users').where('id', id);
    if (!user.length)
        throw new Error('User not found');
    yield server_1.connectedKnex('users').where('id', id).delete();
    return 'Successfully deleted';
});
exports.deleteUser = deleteUser;
const getSingleUser = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield server_1.connectedKnex('users').where('id', id);
    if (!user.length)
        throw new Error('User not found');
    return user[0];
});
exports.getSingleUser = getSingleUser;
// exports.updateUser = async ({ name, email }, req) => {
//   if (!req.isAuth) {
//     throw new Error('Not authenticated');
//   }
//   const fieldsToUpdate = {
//     name,
//     email,
//   };
//   const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
//     new: true,
//     runValidators: true,
//   });
//   return { ...user._doc, password: null };
// };
