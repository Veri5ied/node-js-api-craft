import mongoose from "mongoose";
import options from "../config/dev";

export const connect = (url = options.dbUrl, opts = {}) => {
  return mongoose.connect(url, { ...opts, useNewUrlParser: true });
};
