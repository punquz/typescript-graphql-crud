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
const server_1 = require("../../server");
exports.createUser = ({ userInput }) => __awaiter(void 0, void 0, void 0, function* () {
    let { Name, Email, Phone } = userInput;
    const user = yield server_1.connectedKnex('user').insert({ Name, Phone, Email });
    return user;
});
// exports.viewProfile = async (args, req) => {
//   const user = await User.findOne({ email }).select('+password');
//   return { ...user._doc, password: null };
// };
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
