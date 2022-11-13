import express from "express";
import UserController from "../Controllers/User.controller";
import findUserByEmail from "../Middlewares/FindEmail";
import generateToken from "../Middlewares/generateToken";
const UserRouter = express.Router();

UserRouter.post("/users", UserController.createUser).post(
  "/login",
  findUserByEmail,
  generateToken, UserController.loginUser
);

export default UserRouter;