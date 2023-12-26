const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

async function saveUser(user) {
  const salt = await bcrypt.genSalt();
  user.password = await bcrypt.hash(user.password, salt);
  return await User.create(user);
}

async function loginService(loginData) {
  const u = await User.find({ email: loginData.email });
  if (u.length > 0) {
    const res = bcrypt.compare(loginData.password, u[0].password);
    if (res) {
      //générer le token
      const token = jwt.sign({ email: u[0].email }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      return token;
    }
  }
}

module.exports = { saveUser, loginService };
