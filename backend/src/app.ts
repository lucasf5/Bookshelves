import express from "express";
import routes from "./Routes";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan("dev"));

routes(app);

export default app;
