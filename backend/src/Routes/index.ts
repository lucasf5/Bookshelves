import express from "express";
import BookRouter from "./Book.routes";
import ErrorHandler from "../Middlewares/ErrorHandler";

const routes = (app: express.Application) => {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.use(express.json(), ErrorHandler.handle, BookRouter);
};

export default routes;
