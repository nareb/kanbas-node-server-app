import model from "./model.js";
export const findAllUsers = () => model.find();
export const findUserById = (userId) => model.findById(userId); //model.find({_id: userId});
export const findUserByUsername = (username) =>
  model.findOne({ username: username });
export const findUserByCredentials = (username, password) =>
  model.findOne({ username, password });
export const findUsersByRole = (role) => model.find({role});
export const createUser = (user) => model.create(user);
export const updateUser = (id, user) =>
  model.updateOne({ _id: id }, { $set: user });
export const deleteUser = (userId) => model.deleteOne({ _id: userId });