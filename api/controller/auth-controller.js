import User from "../models/user-model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // Check if the username or email is already taken
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username or email already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new User({ username, email, password: hashedPassword });

    // Save the user to the database
    await newUser.save();

    // Send a response after successfully saving the user
    res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    // Pass the error to the next middleware
    next(error);
  }
};
