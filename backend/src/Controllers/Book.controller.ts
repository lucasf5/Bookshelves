import { Request, Response, NextFunction } from "express";
import BookService from "../Services/Book.service";

class BookController {

  public async getBooks(_req: Request, res: Response, next: NextFunction) {
    try {
      const books = await BookService.getBooks();
      return res.status(200).json(books);
    } catch (error) {
      next(error);
    }
  }
}

export default new BookController();
