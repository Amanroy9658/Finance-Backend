import { asyncHandler } from "../../middleware/asynchandler.js";
import * as authService from "./auth.service.js";

export const loginController = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const data = await authService.login(email);

  res.status(200).json({
    success: true,
    data,
  });
});