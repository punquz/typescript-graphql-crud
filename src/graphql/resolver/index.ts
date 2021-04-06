import { connectedKnex as knex } from '../../server';
export const createUser = async ({ userInput }: any) => {
  let { Name, Email, Phone } = userInput;
  const user = await knex('users').insert({ Name, Phone, Email });
  console.log('us', user);
  return 'User created successfully';
};

export const getAllUsers = async () => {
  const users = await knex('users').select('*');
  return users;
};

export const deleteUser = async ({ id }: any) => {
  const user = await knex('users').where('id', id);
  if (!user.length) throw new Error('User not found');
  await knex('users').where('id', id).delete();
  return 'Successfully deleted';
};

export const getSingleUser = async ({ id }: any) => {
  const user = await knex('users').where('id', id);
  if (!user.length) throw new Error('User not found');
  return user[0];
};

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
