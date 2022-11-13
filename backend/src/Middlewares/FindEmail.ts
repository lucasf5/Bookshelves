import { Request, Response, NextFunction } from "express";
import { validateEmail } from "../utils/validateEmail";
import UserService from "../Services/User.service";

const findUserByEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({
        message: "Invalid email",
      });
    }
    const user = await UserService.findUserByEmail(req.body);
    if (user) {
      if (user.password !== password) {
        return res.status(400).json({
          message: "Invalid password",
        });
      }
      return next();
    }
    return res.status(404).json({
      message: "User not found",
    });
  } catch (error) {
    next(error);
  }
};

export default findUserByEmail;
