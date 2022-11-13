import express from "express";
import BookRouter from "./Book.routes";
import UserRouter from "./User.routes";
import ErrorHandler from "../Middlewares/ErrorHandler";

const routes = (app: express.Application) => {
  app.get("/", (req, res) => {
    res.send("API BOOKSHELVES IS RUNNING");
  });

  app.use(express.json(), ErrorHandler.handle, BookRouter, UserRouter);
};

export default routes;
