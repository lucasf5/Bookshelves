import { Request, Response, NextFunction } from "express";
import UserService from "../Services/User.service";
import { validateEmail } from "../utils/validateEmail";

class UserController {
  public async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        return res.status(400).json({
          message: "Missing required fields",
        });
      }
      if (!validateEmail(email)) {
        return res.status(400).json({
          message: "Invalid email",
        });
      }
      if (password.length < 6) {
        return res.status(400).json({
          message: "Password must be at least 6 characters",
        });
      }
      const user = await UserService.createUser(req.body);
      return res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  public async loginUser(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).json({
        token: req.body.token,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
