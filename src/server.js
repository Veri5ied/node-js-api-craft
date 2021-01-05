import express from "express";
import cors from "cors";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import sampleRouter from "./resources/sample/sample.router";

const app = express();
const PORT = process.env.PORT || 4200;

app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/v1/sample", sampleRouter);

export const start = async () => {
  app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
  });
};
