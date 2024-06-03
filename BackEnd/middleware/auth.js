const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const checkUserAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const { userEmail } = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.get(userEmail);
    next();
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "Unauthorized user",
      error: err.message,
    });
  }
};

module.exports = { checkUserAuth };
