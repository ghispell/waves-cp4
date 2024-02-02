const bcrypt = require("bcryptjs");
const tables = require("../tables");

const hashPassword = async (req, res, next) => {
  try {
    const { password } = req.body;
    if (password) {
      const hash = await bcrypt.hash(password, 13);
      req.body.password = hash;
      next();
    } else {
      res.status(400).send("Password is required");
    }
  } catch (error) {
    next(error);
  }
};

const verifyPassword = async (req, res, next) => {
  try {
    const user = await tables.user.checkEmail(req.body.email);
    if (!user) {
      res.status(400).json({ error: "Wrong email or password" });
    }
    if (await bcrypt.compare(req.body.password, user.password)) {
      delete user.password;
      req.user = user;
      next();
    } else {
      req.status(422).json({ error: "Oops, error ! Try again" });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = { hashPassword, verifyPassword };
