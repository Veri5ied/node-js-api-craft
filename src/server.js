import express from "express";
import cors from "cors";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 4200;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

export const start = async () => {
  app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
  });
};
