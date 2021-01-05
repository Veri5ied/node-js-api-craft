import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({}, { timestamps: true });

export const User = mongoose.model("user", userSchema);
