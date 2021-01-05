export const config = {
  secrets: {
    jwt: process.env.JWT_SECRET_KEY,
  },
  dburl: process.env.MONGODB_URL,
};
