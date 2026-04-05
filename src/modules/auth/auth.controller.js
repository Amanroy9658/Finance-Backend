import { asyncHandler } from "../../middleware/asynchandler.js";
import * as authService from "./auth.service.js";
import { HTTP_STATUS } from "../../core/httpStatus.js";
import { MESSAGES } from "../../core/messages.js";

export const loginController = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const data = await authService.login(email);

  res.status(HTTP_STATUS.OK).json({
    success: true,
    message: MESSAGES.LOGIN_SUCCESS,
    data,
  });
});