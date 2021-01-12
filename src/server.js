import express, { json, urlencoded } from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { connect } from "./config/db";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4200;

app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

export const start = async () => {
  try {
    await connect();
    app.listen(PORT, () => {
      console.log(`App is running on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};
