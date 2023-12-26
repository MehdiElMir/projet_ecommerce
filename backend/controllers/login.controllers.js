const loginServices = require("../services/login.services");

async function signup(req, resp) {
  try {
    const user = await loginServices.saveUser(req.body);
    resp.status(201).json(user);
  } catch (error) {
    resp.status(500).json({ error: error });
  }
}
async function login(req, res) {
  try {
    const token = await loginServices.loginService(req.body);
    res.status(200).json(token);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
}

module.exports = { signup, login };
