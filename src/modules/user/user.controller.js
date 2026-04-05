import {asyncHandler } from "../middleware/asynchandler.js";
import * as userService  from "./user.service.js";

export const createUserController = asyncHandler(async (req, res) => {
    const user = await createUser(req.body);
    res.status(201).json(user);
});

export const getAllUsersController = asyncHandler(async (req, res) => {
    const users = await getAllUsers();
    res.status(200).json(users);
});

export const updateUserController = asyncHandler(async (req, res) => {
    const user = await updateUser(req.params.id, req.body);
    res.status(200).json(user);
});