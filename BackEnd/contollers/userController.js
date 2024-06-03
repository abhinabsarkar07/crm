const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user = require("../models/userModel");

const userRegister = async (req, res) => {
  try {
    const { userName, userEmail, userPassword, Role } = req.body;

    // Check if the email already exists
    const existingUser = await user.get(userEmail);
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: "User with this email already exists",
      });
    }

    // Create a new user instance
    const newUser = new user({
      userName,
      userEmail,
      userPassword,
    });

    // Save the new user
    await newUser.save();

    res.status(201).json({
      success: "success",
      message: "User registered successfully",
    });
  } catch (err) {
    res.status(400).json({
      success: "failure",
      error: err.message,
    });
  }
};

const userLogin = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;

    // Check if email and password are provided
    if (!userEmail || !userPassword) {
      return res.status(400).json({
        success: "failure",
        error: "Please provide both email and password",
      });
    }

    // Fetch the user from the database
    const userData = await user.get(userEmail);
    if (!userData) {
      return res.status(400).json({
        success: "failure",
        error: "User not found",
      });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(userPassword, userData.userPassword);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        error: "Invalid email or password",
      });
    }

    // Generate JWT token
    const token = jwt.sign({ userEmail }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(200).json({
      success: "success",
      message: "Login successful",
      token: token,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

module.exports = {
  userRegister,
  userLogin,
};
