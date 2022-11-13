import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const generateToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = jwt.sign(
      { email: req.body.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );
    req.body.token = token;
    return next();
  } catch (error) {
    next(error);
  }
};

export default generateToken;
