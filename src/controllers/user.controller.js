import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, fullname, profile, password } = req.body;

  // Validation
  if (!username || !email || !fullname || !password) {
    throw new ApiError(400, "All fields are required");
  }

  
  const newUser = await User.create({
    username,
    email,
    fullname,
    profile,
    password,
  });

  
  return res
    .status(201)
    .json(new ApiResponse(201, newUser, "User registered successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  
  const user = await User.findOne({ email });

  
  if (!user || !(await user.isPasswordCorrect(password))) {
    throw new ApiError(401, "Invalid credentials");
  }

 
  return res
    .status(200)
    .json(new ApiResponse(200, user, "User logged in successfully"));
});

export { registerUser, loginUser };
