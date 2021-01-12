import mongoose from "mongoose";

export function connect() {
  mongoose
    .connect(
      `mongodb+srv://${process.env.db_username}:${process.env.db_password}@cluster0.1izqg.mongodb.net/${process.env.db_name}?retryWrites=true&w=majority`,
      { useNewUrlParser: true },
      { useUnifiedTopology: true }
    )
    .then(() => {
      console.log("Successfully Connected to MongoDB Atlas");
    })
    .catch((error) => {
      console.error(error);
    });
}
