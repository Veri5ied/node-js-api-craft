import mongoose from "mongoose";

const sampleSchema = new mongoose.Schema({}, { timestamps: true });

export const Sample = mongoose.model("sample", sampleSchema);
