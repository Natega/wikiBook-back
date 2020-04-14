import mongoose, { Schema } from "mongoose";
import { IBookModel } from "../types/IBook";

const bookSchema = new Schema({
  title: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  img: { type: String, required: true },
  videos: { type: [String], required: false },
  podcasts: { type: [String], required: false },
});

export default mongoose.model<IBookModel>("Book", bookSchema);
