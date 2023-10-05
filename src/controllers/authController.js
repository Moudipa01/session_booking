const uuid = require('uuid');
const User = require('../models/User');

const users = [];

function generateToken() {
  return uuid.v4();
}

function registerUser(universityID, password) {
  const id = uuid.v4();
  const user = new User(id, universityID, password);
  user.token = generateToken();
  users.push(user);
  return user;
}

function loginUser(universityID, password) {
  const user = users.find(u => u.universityID === universityID && u.password === password);
  if (user) {
    user.token = generateToken();
    return user;
  }
  return null;
}

module.exports = {
  registerUser,
  loginUser,
};
