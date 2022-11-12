import express from "express";
import BookController from "../Controllers/Book.controller";
const BookRouter = express.Router();

BookRouter.get("/books", BookController.getBooks);

export default BookRouter;