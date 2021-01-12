import jwt from "jsonwebtoken";
import { jwtSecrets, jwtExpiration } from "../config/secrets";

export const newToken = (user) => {
  return jwt.sign({ id: user.id }, jwtSecrets, { expiresIn: jwtExpiration });
};

export const verifyToken = (token) => {
  new Promise((resolve, reject) => {
    jwt.verify(token, jwtSecrets, (err, payload) => {
      if (err) return reject(err);
      resolve(payload);
    });
  });
};

export const signup = async (req, res) => {};
export const signin = async (req, res) => {};
export const protect = async (req, res, next) => {
  next();
};
