import jwt from "jsonwebtoken";
import { User } from "../user/user.model.js";

export const login = async (email) => {
  if (!email) {
    throw { statusCode: 400, message: "Email required" };
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw { statusCode: 404, message: "User not found" };
  }

  if (user.status === "inactive") {
    throw { statusCode: 403, message: "User inactive" };
  }

  const token = jwt.sign(
    {
      userId: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return { user, token };
};