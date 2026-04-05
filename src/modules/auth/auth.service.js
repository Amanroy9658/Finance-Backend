import jwt from "jsonwebtoken";
import { User } from "../user/user.model.js";
import { HTTP_STATUS } from "../../core/httpstatuscode.js";
import { MESSAGES } from "../../core/messages.js";

export const login =async (email) => {
    if (!email){
        throw {statusCode: HTTP_STATUS.BAD_REQUEST, message: MESSAGES.EMAIL_REQUIRED};
    }

    const user = await User.findOne({email});
    if (!user){
        throw {statusCode: HTTP_STATUS.NOT_FOUND, message: MESSAGES.USER_NOT_FOUND};
    }
    if (user.status === "inactive"){
        throw {statusCode: HTTP_STATUS.FORBIDDEN, message: MESSAGES.USER_INACTIVE};
    }

    const token = jwt.sign(
        {
            userId: user._id,
            role: user.role,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d"}
    );

    return { user, token };
};