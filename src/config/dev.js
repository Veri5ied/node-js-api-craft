export const config = {
  secrets: {
    jwt: process.env.JWT_SECRET_KEY,
  },
  dburl: `mongodb+srv://${process.env.MONGODB_DBNAME}:${process.env.MONGODB_PASSWORD}@cluster0.iugyx.mongodb.net/test?retryWrites=true&w=majority`,
};
