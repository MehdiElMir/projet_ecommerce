const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

async function jwtVerify(req, res, next) {
  const token = req.headers.authorization;
  jwt.verify(token, process.env.SECRET_KEY, (error, data) => {
    if (error) {
      res.status(401).json("problème d' authorization");
    } else {
      req.user = { email: data.email, verified: true };
      next();
    }
    console.log(data);
    next();
  });
  next();
}
module.exports = { jwtVerify };
